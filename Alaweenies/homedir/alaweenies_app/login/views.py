from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connection
from django.template import Context, loader
from django.views.decorators.csrf import csrf_exempt
import json

def home(request):
    template = loader.get_template("login.html")
    return HttpResponse(template.render())

def login_user(request):
    cursor = connection.cursor()
    email = request.GET.get('email', False)
    password = request.GET.get('password', False)
    cursor.execute("SELECT * FROM Customers WHERE Email=%s AND PasswordHash=%s", [email, password])
    row = cursor.fetchall()
    if cursor.rowcount == 0:
        return JsonResponse({'login': 'false'})
    else:
        customerId = row[0][0]#[item['CustomerID'] for item in row]
        return JsonResponse({'login': 'true', 'customerId': customerId})

def check_email(request):
    cursor = connection.cursor()
    email = request.GET.get('email', False)
    cursor.execute("SELECT CustomerID FROM Customers WHERE Email=%s", [email])
    row = cursor.fetchall()
    if cursor.rowcount == 0:
        return JsonResponse({'email_exists': 'false'})
    else:
        return JsonResponse({'email_exists': 'true'})

def signup_user(request):
    cursor = connection.cursor()
    firstName = request.GET.get('firstName', False)
    lastName = request.GET.get('lastName', False)
    email = request.GET.get('email', False)
    password = request.GET.get('password', False)
    phoneNumber = request.GET.get('phoneNumber', False)
    dob = request.GET.get('dob', False)
    preferredLocation = request.GET.get('preferredLocation', False)

    cursor.execute("INSERT INTO Customers VALUES (NULL, %s, %s, %s, %s, %s, %s, NULL, NULL, %s)", [phoneNumber, email, password, firstName, lastName, dob, preferredLocation])
    
    cursor.execute("SELECT CustomerID FROM Customers WHERE Email=%s", [email])
    row = cursor.fetchall()
    customerId = row[0][0]
    
    return JsonResponse({'success': 'true', 'customerId': customerId})

#with connection.cursor() as cursor:
 #   cursor.execute("INSERT INTO Coffees VALUES(3, 'mocha', 5, 'blah', 5)")