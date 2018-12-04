from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connection
from django.template import Context, loader
import json

def home(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())