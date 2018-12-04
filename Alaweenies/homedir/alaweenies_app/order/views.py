from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connection
from django.template import Context, loader
import random
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    template = loader.get_template("order.html")
    return HttpResponse(template.render())
    
def get_user(request):
    customerId = request.GET.get('customerId', False)
    cursor = connection.cursor()
    cursor.execute("SELECT FirstName, PreferredLocation FROM Customers WHERE CustomerID=%s", [customerId])
    row = cursor.fetchall()
    firstName = row[0][0]
    locationId = row[0][1]
    
    return JsonResponse({"firstName" : firstName, "locationId" : locationId})

def get_price_modifier(request):
    cursor = connection.cursor()
    cursor.execute("SELECT priceModifier FROM coffeePriceModifier")
    priceModifier = cursor.fetchall()[0][0]
    
    return JsonResponse({'priceModifier' : priceModifier})

def get_most_popular(request):
    restaurantId = request.GET.get('restaurantId')
    cursor = connection.cursor()
    cursor.execute("""SELECT hID
                        FROM (
                            SELECT hd as hID, MAX(c)
                            FROM (
                                SELECT count(HotDogID) as c ,HotDogID as hd FROM Orders_Items OI, Orders O  
                                WHERE OI.OrderID = O.OrderID AND RestaurantID = %s AND HotDogID > 0
                                GROUP BY HotDogID
                                )hot
                            )dog
                           """, [restaurantId])
    row1 = cursor.fetchall()
    mostPopHotDog = row1[0]
    
    cursor.execute("""SELECT coffeeId
                        FROM (
                            SELECT coffee as coffeeId, MAX(c)
                            FROM (
                                SELECT count(CoffeeID) as c ,CoffeeID as coffee FROM Orders_Items OI, Orders O  
                                WHERE OI.OrderID = O.OrderID AND RestaurantID = %s AND CoffeeID > 0
                                GROUP BY CoffeeID
                                )c1
                            )c2
                           """, [restaurantId])
    row2 = cursor.fetchall()
    mostPopCoffee = row2[0]
    
    cursor.execute("""SELECT sideId
                        FROM (
                            SELECT side as sideId, MAX(c)
                            FROM (
                                SELECT count(SideID) as c ,SideID as side FROM Orders_Items OI, Orders O  
                                WHERE OI.OrderID = O.OrderID AND RestaurantID = %s AND SideID > 0
                                GROUP BY SideID
                                )c1
                            )c2
                           """, [restaurantId])
    row3 = cursor.fetchall()
    mostPopSide = row3[0]
    
    return JsonResponse({'mostPopHotDog' : mostPopHotDog, 'mostPopCoffee' : mostPopCoffee, 'mostPopSide' : mostPopSide})

@csrf_exempt
def post_order(request):
    dogOrderArray = request.POST.getlist('dogOrderArray[]')
    dogNamesArray = request.POST.getlist('dogNamesArray[]')
    dogsQuantityArray = request.POST.getlist('dogsQuantityArray[]')
    hotDogSum = request.POST.get('hotDogSum')
    coffeeOrderArray = request.POST.getlist('coffeeOrderArray[]')
    coffeeNamesArray = request.POST.getlist('coffeeNamesArray[]')
    coffeeQuantityArray = request.POST.getlist('coffeeQuantityArray[]')
    coffeeSum = float(request.POST.get('coffeeSum'))
    sidesOrderArray = request.POST.getlist('sidesOrderArray[]')
    sidesNamesArray = request.POST.getlist('sidesNamesArray[]')
    sidesQuantityArray = request.POST.getlist('sidesQuantityArray[]')
    sidesSum = int(request.POST.get('sidesSum'))
    totalPrice = float(request.POST.get('totalPrice'))
    orderId = int(request.POST.get('orderId'))
    customerId = int(request.POST.get('customerId'))
    locationId = int(request.POST.get('locationId'))

    cursor = connection.cursor()

    output = ""

    # if order doesn't already exist
    if int(orderId) == 0:
        # add order to Orders table
        cursor.execute("INSERT INTO Orders VALUES (0, %s, %s, 0, 0, %s)", [totalPrice, customerId, locationId])
        
        # get order ID of order just created
        cursor.execute("SELECT AUTO_INCREMENT FROM  INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'alaweenies_alaweenies_test' AND TABLE_NAME = 'Orders'")
        row = cursor.fetchall()
        orderId = row[0][0] - 1

        # add order items to Orders_Items table
        for x in range(len(dogOrderArray)):
            if dogOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, %s, 0, 0, %s, %s)", [customerId, x + 1, int(dogsQuantityArray[x]), int(orderId)])
                output += 'blah'
                    
        for x in range(len(coffeeOrderArray)):
            if coffeeOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, 0, 0, %s, %s, %s)", [customerId, x + 1, int(coffeeQuantityArray[x]), int(orderId)])
                    
        for x in range(len(sidesOrderArray)):
            if sidesOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, 0, %s, 0, %s, %s)", [customerId, x + 1, int(sidesQuantityArray[x]), int(orderId)])
                
    else:
        # update order in Orders table
        cursor.execute("UPDATE Orders SET OrderID=%s, OrderPrice=%s, CustomerID=%s, DriverID=%s, RestaurantID=%s WHERE OrderID=%s", [orderId, totalPrice, customerId, 0, locationId, orderId])
        
        # remove entries from Orders_Items table
        cursor.execute("DELETE FROM Orders_Items WHERE OrderID=%s", [orderId])
        
        #add orderItems to Orders_Items table
        for x in range(len(dogOrderArray)):
            if dogOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, %s, 0, 0, %s, %s)", [customerId, x + 1, int(dogsQuantityArray[x]), int(orderId)])
                output += 'blah'
                    
        for x in range(len(coffeeOrderArray)):
            if coffeeOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, 0, 0, %s, %s, %s)", [customerId, x + 1, int(coffeeQuantityArray[x]), int(orderId)])
                    
        for x in range(len(sidesOrderArray)):
            if sidesOrderArray[x] == 'true':
                cursor.execute("INSERT INTO Orders_Items VALUES (%s, 0, %s, 0, %s, %s)", [customerId, x + 1, int(sidesQuantityArray[x]), int(orderId)])
    
    return JsonResponse({'orderId' : orderId})
    
@csrf_exempt
def cancel_order(request):
    orderId = int(request.POST.get('orderId'))
    cursor = connection.cursor()
    # delete order from Orders
    cursor.execute("DELETE FROM Orders WHERE OrderID=%s", [orderId])
    # delete order from Orders_Items
    cursor.execute("DELETE FROM Orders_Items WHERE OrderID=%s", [orderId])
    
    return JsonResponse({'success' : True})

