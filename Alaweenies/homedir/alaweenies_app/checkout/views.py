from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connection
from django.template import Context, loader
import random
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    template = loader.get_template("checkout.html")
    return HttpResponse(template.render())

def get_order(request):
    orderId = request.GET.get('orderId', '')
    cursor = connection.cursor()
    cursor.execute("SELECT HotDogID, CoffeeID, SideID FROM Orders_Items WHERE OrderID=%s", [orderId])
    rows = cursor.fetchall()
    
    hot_dog = rows[0][0]
    coffee = rows[0][1]
    side = rows[0][2]
    
    cursor.execute("SELECT Name FROM HotDogs WHERE HotDogID=%s", [hot_dog])
    hot_dog_name = cursor.fetchall()[0][0]
    
    cursor.execute("SELECT Name FROM Coffees WHERE CoffeeID=%s", [coffee])
    coffee_name = cursor.fetchall()[0][0]
    
    cursor.execute("SELECT Name FROM Sides WHERE SideID=%s", [side])
    side_name = cursor.fetchall()[0][0]

    
    return JsonResponse({'hot_dog' : hot_dog_name, 'coffee' : coffee_name, 'side' : side_name})

def get_drivers(request):
    locationId = request.GET.get('locationId', '')
    cursor = connection.cursor()
    cursor.execute("SELECT DriverId, Name FROM Drivers WHERE Restaurant=%s", [locationId])
    drivers = cursor.fetchall()
    
    return JsonResponse({'drivers' : drivers})

@csrf_exempt
def update_address(request):
    customerId = int(request.POST.get('customerId'))
    address = request.POST.get('address')
    cursor = connection.cursor()
    cursor.execute("UPDATE Customers SET Address=%s WHERE CustomerID=%s", [address, customerId])
    
    return JsonResponse({'success' : True})

@csrf_exempt
def update_driver(request):
    orderId = int(request.POST.get('orderId', ''))
    driverId = int(request.POST.get('driverId', ''))
    cursor = connection.cursor()
    cursor.execute("UPDATE Orders SET DriverID=%s WHERE OrderID=%s", [driverId, orderId])
    return JsonResponse({'success' : True})
    
@csrf_exempt
def cancel_order(request):
    orderId = request.POST.get('orderId', '')
    cursor = connection.cursor()
    cursor.execute("DELETE FROM Orders_Items WHERE OrderID=%s", [orderId])

    return JsonResponse({'completed' : 'true'})

#with connection.cursor() as cursor:
 #   cursor.execute("INSERT INTO Coffees VALUES(3, 'mocha', 5, 'blah', 5)")