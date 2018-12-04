from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connection
from django.template import Context, loader
import random
from django.views.decorators.csrf import csrf_exempt
import json

import schedule
import time

import urllib.request, json 

def home(request):
    template = loader.get_template("tracking.html")
    return HttpResponse(template.render())

def get_driver(request):
    driverId = request.GET.get('driverId')
    cursor = connection.cursor()
    cursor.execute("SELECT Name, PhoneNumber, CarMake, CarModel, CarYear FROM Drivers WHERE DriverId=%s", [driverId])
    driver = cursor.fetchall()[0]
    
    return JsonResponse({'driver' : driver})

def get_pending_orders(request):
    driverId = request.GET.get('driverId')
    
    cursor = connection.cursor()
    cursor.execute("SELECT FirstName, LastName FROM Orders O, Customers C WHERE O.CustomerID=C.CustomerID AND DriverID=%s AND Delivered=0", [driverId])
    customers = cursor.fetchall()
    
    return JsonResponse({'customers' : customers})