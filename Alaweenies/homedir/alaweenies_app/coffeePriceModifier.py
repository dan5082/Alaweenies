#!/usr/bin/python3
# This advanced function gets the latest daily updated coffee commodity price
# as well as the current Chicago electric prices to
# estimate the best price to set for our coffee sales
# this advanced function helps sustain our bussiness in a novel way
# by updating prices of our coffee nightly due to market conditions

import pymysql

import urllib.request, json 
with urllib.request.urlopen("https://www.quandl.com/api/v3/datasets/CHRIS/ICE_KC2.json?api_key=asq_aq-GCjod7taNicog") as url:
    data = json.loads(url.read().decode())
    coffeeDayHighPrice = data["dataset"]["data"][0][2]
    #print(coffeeDayHighPrice, " Cents per pound")
    
rawCoffeeCost = (coffeeDayHighPrice *3)/100

print("A pound of unroasted coffee would cost us about $", rawCoffeeCost)

with urllib.request.urlopen("https://hourlypricing.comed.com/api?type=currenthouraverage") as url:
    data = json.loads(url.read().decode())
    chicagoElectricPrice = data[0]["price"]
    print(chicagoElectricPrice, "Per kW/hour electric cost at current prices")    

roasterCapacity = 11
print(roasterCapacity, "Pound per batch")

#https://www.diedrichroasters.com/store-roasters?id=56
kwUsedPerBatch = 12.6
batchLaborCost = (30 * .24)

batchElectricCost = (kwUsedPerBatch*(float(chicagoElectricPrice))/100.0)

print("For labor we would pay approximately: ", batchLaborCost)
print("Batch Electricity cost", batchElectricCost)

elevenRoastedCost = batchLaborCost + batchLaborCost + (12*rawCoffeeCost)

print("12 pounds of roasted coffee cost:", elevenRoastedCost)

poundCost = elevenRoastedCost/12

print("So one completed pound is:", poundCost)

gramsCoffeeUsedInDrink = 18

gramsInPound = 453.592

salesPerPound = gramsInPound/gramsCoffeeUsedInDrink

coffeeCostPerDrink = poundCost/salesPerPound

roundedCost = round(coffeeCostPerDrink,2)

print("Our price Modifier will be +$", roundedCost)

db = pymysql.connect(host="localhost", port=3306, user="alaweenies_api", passwd="alaweenies1", db="alaweenies_alaweenies_test")

cursor = db.cursor()

print("Cursor: ")
print(cursor)

cursor.execute("UPDATE coffeePriceModifier SET priceModifier=%s" % (roundedCost,))

print("Description: ")
print(cursor.description)

db.commit()

db.close()






