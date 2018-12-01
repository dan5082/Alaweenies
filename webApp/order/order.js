/*
Project for CS411 (Database Systems) at the University of Illinois
Alaweenie's Hot Dogs & Coffee Online Ordering & Delivery App
Developed by Danny Dore, Daniel Niewierowski, Justin Isla, and Aayush Mishra
2018
*/

/*
-----------------------------------------------------------------------------
Jquery Function that generates the display at the load of page:
-----------------------------------------------------------------------------
*/
$(function () {
    $('#submit').click(function () {
    var container = $('#bootstrapcontainer');

    //Draw the food row:
    container.append(" <div id='foodRow' class='row'>");
    var foodRow = $('#foodRow');

    //Hot dog info:
    foodRow.append("<h3>Hot Dogs:</h3>");
    foodRow.append("<div id='hotDogCol' class='col-sm-3'>");

    var hotDogItem = $('#hotDogCol');
    hotDogItem.append('<form id="hotDogform" class="form-group">');

    var hotDogForm = $('#hotDogform');
    hotDogForm.append("<label for='alaweenie'>The Alaweenie (Signature Hot Dog) $10</label>");
    hotDogForm.append("<input type='number' id='alaweenieInput' name='alaweenieQuantity' min='0' value='0'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='portlandia'>The Portlandia (Vegan Hot Dog) $3</label>");
    hotDogForm.append("<input type='number' id='portlandiaInput' name='portlandiaQuantity' min='0' value='0'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='phillyCheese'>Philly Cheese Hot Dog $6</label>");
    hotDogForm.append("<input type='number' id='phillyInput' name='phillyQuantity' min='0' value='0'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='chicagoStyleHotDog'>Chicago-Style Hot Dog $4</label>");
    hotDogForm.append("<input type='number' id='chicagoInput' name='chicagoQuantity' min='0' value='0'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='champaignCornDog'>Champaign Corn Dog $2</label>");
    hotDogForm.append("<input type='number' id='champaignInput' name='champaignQuantity' min='0' value='0'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='halloweenie'>Halloweenie (October Special) $5</label>");
    hotDogForm.append("<input type='number' id='halloweenieInput' name='halloweenieQuantity' min='0' value='0'>");
    hotDogForm.append('<br><br>');
    hotDogForm.append('<input type="button" id="hotDogSubmit" value="Select Hot Dog(s)">');
    hotDogForm.append('<br><br>');

    hotDogForm.submit((e) => {
        e.preventDefault(); //Prevents stupid redirection to home login.
     });
    
    hotDogItem.append('</form>');

    foodRow.append('</div>');

    //Coffee info:
    foodRow.append("<h3>Coffee:</h3>");
    foodRow.append("<div id='coffeeCol' class='col-sm-3'>");

    var coffeeItem = $('#coffeeCol');
    coffeeItem.append('<form id="coffeeForm" class="form-group">');
    
    var coffeeForm = $('#coffeeForm');
    coffeeForm.append("<label for='arabic'>Arabic (Black Coffee) $2</label>");
    coffeeForm.append("<input type='number' id='arabicInput' name='arabicQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='cappuccino'>Cappuccino (Double Expresso) $3</label>");
    coffeeForm.append("<input type='number' id='cappuccinoInput' name='cappuccinoQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='mocha'>Mocha (Chocolate-flavored) $3</label>");
    coffeeForm.append("<input type='number' id='mochaInput' name='mochaQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='espresso'>Espresso Coffee $2</label>");
    coffeeForm.append("<input type='number' id='espressoInput' name='espressoQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='latte'>Latte (Espresso & Steamed Milk) $3</label>");
    coffeeForm.append("<input type='number' id='latteInput' name='latteQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='weeklyFlavor'>Flavor Of The Week $5</label>");
    coffeeForm.append("<input type='number' id='weeklyFlavorInput' name='weeklyFlavorQuantity' min='0' max='50' value='0'>");
    coffeeForm.append('<br><br>');
    coffeeForm.append('<input type="button" id="coffeeSubmit" value="Select Coffee(s)">');
    coffeeForm.append('<br><br>');

    coffeeForm.submit((e) => {
        e.preventDefault(); //Prevents stupid redirection to home login.
     });

    coffeeItem.append('</form>');

    foodRow.append('</div>');

    //Sides info:
    foodRow.append("<h3>Sides:</h3>");
    foodRow.append("<div id='sidesCol' class='col-sm-3'>");

    var sidesItem = $('#sidesCol');
    sidesItem.append('<form id="sidesForm" class="form-group">');

    var sidesForm = $('#sidesForm');

    sidesForm.append("<label for='frenchFries'>French Fries (Steak-frie Style) $2</label>");
    sidesForm.append("<input type='number' id='friesInput' name='friesQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='voodoodonut'>VooDoo Donut (Crazy Donut!) $4</label>");
    sidesForm.append("<input type='number' id='donutInput' name='donutQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='deepDishBites'>Deep Dish Pizza Bites $5</label>");
    sidesForm.append("<input type='number' id='pizzaInput' name='pizzaQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='phillyPoundCake'>Philly Pound Cake $3</label>");
    sidesForm.append("<input type='number' id='cakeInput' name='cakeQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='avocadoToast'>Avocado Toast (Healthy Side) $2</label>");
    sidesForm.append("<input type='number' id='toastInput' name='toastQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='bureek'>Bureek (Spinach & Cheese Side) $3</label>");
    sidesForm.append("<input type='number' id='bureekInput' name='bureekQuantity' min='0' max='50' value='0'>");
    sidesForm.append('<br><br>');
    sidesForm.append('<input type="submit" id="sidesSubmit" value="Select Sides">');
    sidesForm.append('<br><br>');

    sidesForm.submit((e) => {
        e.preventDefault(); //Prevents stupid redirection to home login.
     });

    sidesItem.append('</form>');

    foodRow.append('</div>');

    foodRow.append("")
    foodRow.append("</div>");

    //Add the order summary row:
    container.append(" <div id='summaryRow' class='row'>");
    var summaryRow = $('#summaryRow');

    summaryRow.append("<h3>Order Summary:</h3>");
    summaryRow.append("<div id='orderCol' class='col-sm-3'>");

    var orderItem = $('#orderCol');
    orderItem.append('<ul id="orderList">Order:');

    var orderList = $("#orderList");
    orderList.append("<li id='dogsOrder'></li>");
    orderList.append("<li id='coffeeOrder'></li>");
    orderList.append("<li id='sidesOrder'></li>");
    orderList.append("<li id='totalOrder'>Total Order</li>");
    orderItem.append("</ul>");
    
    summaryRow.append('</div>');

    summaryRow.append("<div id='priceCol' class='col-sm-3'>");

    var priceItem = $('#priceCol');
    priceItem.append('<ul id="priceList">Totals:');

    var priceList = $("#priceList");
    priceList.append("<li id='dogsPrice'>$0.00</li>");
    priceList.append("<li id='coffeePrice'>$0.00</li>");
    priceList.append("<li id='sidesPrice'>$0.00</li>");
    priceList.append("<li id='totalPrice'>$0.00</li>");
    priceList.append("</ul>");
    
    summaryRow.append('</div>');

    //Add the checkout info:
    summaryRow.append("<div id='checkoutCol' class='col-sm-3'>");

    var checkoutItem = $('#checkoutCol');
    checkoutItem.append('<h3>Checkout:</h3>');
    checkoutItem.append('<input type="button" value="Checkout">');

    summaryRow.append("</div>");

    container.append("</div>");

    //Function to update the cost and order section of Hot Dogs:
    $('#hotDogSubmit').click(function () {
        //Get the value of each hot dog menu item:
        var alaweenie = parseInt($('#alaweenieInput').val());
        var portlandia = parseInt($('#portlandiaInput').val());
        var philly = parseInt($('#phillyInput').val());
        var chicago = parseInt($('#chicagoInput').val());
        var champaign = parseInt($('#champaignInput').val());
        var halloweenie = parseInt($('#halloweenieInput').val());

        //Display the items and the quantities based on what is selected:
        //Create an array that takes bool values:
        var dogOrderArray = [false, false, false, false, false, false];
        var dogNamesArray = ["Alaweenie", "Portlandia", "Philly Cheese Dog", "Chicago-Style", "Chamapaign Corn Dog", "Halloweenie"];
        var dogsQuantityArray = [alaweenie, portlandia, philly, chicago, champaign, halloweenie];
        
        //Set values to true based on which hot dogs are ordered:
        if (alaweenie > 0) {
            dogOrderArray[0] = true;
        } if (portlandia > 0) {
            dogOrderArray[1] = true;
        } if (philly > 0) {
            dogOrderArray[2] = true;
        } if (chicago > 0) {
            dogOrderArray[3] = true;
        } if (champaign > 0) {
            dogOrderArray[4] = true;
        } if (halloweenie > 0) {
            dogOrderArray[5] = true;
        }

        //Iterate through the list and update the orders list item:
        var hotDogOrderList = "";
        for (var dogI = 0; dogI < 6; dogI++) {
            if (dogOrderArray[dogI] == true) {
                //Add the dog name and the quantity ordered:
                hotDogOrderList += dogNamesArray[dogI] + " (" + dogsQuantityArray[dogI] + ")," + " ";
            }
        }

        //Calculate the hot dog cost:
        //Condition check: Values less than zero:
        var alaweenieCost = alaweenie * 10;
        var portlandiaCost = portlandia * 3;
        var phillyCost = philly * 6;
        var chicagoCost = chicago * 4;
        var champaignCost = champaign * 2;
        var halloweenieCost = halloweenie * 5;

        if (alaweenieCost < 0) {
            alaweenieCost = 0;
        } if (portlandiaCost < 0) {
            portlandiaCost = 0;
        } if (phillyCost < 0) {
            phillyCost = 0;
        } if (chicagoCost < 0) {
            chicagoCost = 0;
        } if (champaignCost < 0) {
            champaignCost = 0;
        } if (halloweenieCost < 0) {
            halloweenieCost = 0;
        }

        var hotDogSum = alaweenieCost + portlandiaCost + phillyCost + chicagoCost + champaignCost + halloweenieCost;

        //Update the order list for hot dogs & the price:
        document.getElementById("dogsOrder").innerHTML = hotDogOrderList;
        document.getElementById("dogsPrice").innerHTML = "$" + hotDogSum + ".00";
    });

    //Function to update the cost and order section of Coffee:
    $('#coffeeSubmit').click(function () {
        //Get the value of each coffee menu item:
        var arabic = parseInt($('#arabicInput').val());
        var cappuccino = parseInt($('#cappuccinoInput').val());
        var mocha = parseInt($('#mochaInput').val());
        var espresso = parseInt($('#espressoInput').val());
        var latte = parseInt($('#latteInput').val());
        var weeklyFlavor = parseInt($('#weeklyFlavorInput').val());

        //Display the items and the quantities based on what is selected:
        //Create an array that takes bool values:
        var coffeeOrderArray = [false, false, false, false, false, false];
        var coffeeNamesArray = ["Arabic", "Cappuccino", "Mocha", "Espresso", "Latte", "Weekly Flavor"];
        var coffeeQuantityArray = [arabic, cappuccino, mocha, espresso, latte, weeklyFlavor];
        
        //Set values to true based on which coffees are ordered:
        if (arabic > 0) {
            coffeeOrderArray[0] = true;
        } if (cappuccino > 0) {
            coffeeOrderArray[1] = true;
        } if (mocha > 0) {
            coffeeOrderArray[2] = true;
        } if (espresso > 0) {
            coffeeOrderArray[3] = true;
        } if (latte > 0) {
            coffeeOrderArray[4] = true;
        } if (weeklyFlavor > 0) {
            coffeeOrderArray[5] = true;
        }

        //Iterate through the list and update the orders list item:
        var coffeeOrderList = "";
        for (var coffeeI = 0; coffeeI < 6; coffeeI++) {
            if (coffeeOrderArray[coffeeI] == true) {
                //Add the coffee name and the quantity ordered:
                coffeeOrderList += coffeeNamesArray[coffeeI] + " (" + coffeeQuantityArray[coffeeI] + ")," + " ";
            }
        }

        //Calculate the coffee cost:
        var arabicCost = arabic * 2;
        var cappuccinoCost = cappuccino * 3;
        var mochaCost = mocha * 3;
        var espressoCost = espresso * 2;
        var latteCost = latte * 3;
        var weeklyFlavorCost = weeklyFlavor * 5;

        if (arabicCost < 0) {
            arabicCost = 0;
        } if (cappuccinoCost < 0) {
            cappuccinoCost = 0;
        } if (mochaCost < 0) {
            mochaCost = 0;
        } if (espressoCost < 0) {
            espressoCost = 0;
        } if (latteCost < 0) {
            latteCost = 0;
        } if (weeklyFlavorCost < 0) {
            weeklyFlavorCost = 0;
        }

        var coffeeSum = arabicCost + cappuccinoCost + mochaCost + espressoCost + latteCost + weeklyFlavorCost;

        //Update the order list for coffees & the price:
        document.getElementById("coffeeOrder").innerHTML = coffeeOrderList;
        document.getElementById("coffeePrice").innerHTML = "$" + coffeeSum + ".00";
    });

    //Function to update the cost and order section of Sides:
    $('#sidesSubmit').click(function () {
        //Get the value of each sides menu item:
        var fries = parseInt($('#friesInput').val());
        var donut = parseInt($('#donutInput').val());
        var pizza = parseInt($('#pizzaInput').val());
        var cake = parseInt($('#cakeInput').val());
        var toast = parseInt($('#toastInput').val());
        var bureek = parseInt($('#bureekInput').val());

        //Display the items and the quantities based on what is selected:
        //Create an array that takes bool values:
        var sidesOrderArray = [false, false, false, false, false, false];
        var sidesNamesArray = ["Fries", "Donut", "Pizza Bites", "Cake", "Toast", "Bureek"];
        var sidesQuantityArray = [fries, donut, pizza, cake, toast, bureek];
        
        //Set values to true based on which sides are ordered:
        if (fries > 0) {
            sidesOrderArray[0] = true;
        } if (donut > 0) {
            sidesOrderArray[1] = true;
        } if (pizza > 0) {
            sidesOrderArray[2] = true;
        } if (cake > 0) {
            sidesOrderArray[3] = true;
        } if (toast > 0) {
            sidesOrderArray[4] = true;
        } if (bureek > 0) {
            sidesOrderArray[5] = true;
        }

        //Iterate through the list and update the orders list item:
        var sidesOrderList = "";
        for (var sidesI = 0; sidesI < 6; sidesI++) {
            if (sidesOrderArray[sidesI] == true) {
                //Add the side name and the quantity ordered:
                sidesOrderList += sidesNamesArray[sidesI] + " (" + sidesQuantityArray[sidesI] + ")," + " ";
            }
        }

        //Calculate the sides cost:
        //Condition check: less than 0 entered:
        var friesCost = fries * 2;
        var donutCost = donut * 4;
        var pizzaCost = pizza * 5;
        var cakeCost = cake * 3;
        var toastCost = toast * 2;
        var bureekCost = bureek * 3;

        if (fries < 0) {
            friesCost = 0;
        } if (donut < 0) {
            donutCost = 0;
        } if (pizza < 0) {
            pizzaCost = 0;
        } if (cake < 0) {
            cakeCost = 0;
        } if (toast < 0) {
            toastCost = 0;
        } if (bureek < 0) {
            bureekCost = 0;
        }

        var sidesSum = friesCost + donutCost + pizzaCost + cakeCost + toastCost + bureekCost;

        //Update the order list for sides & the price:
        document.getElementById("sidesOrder").innerHTML = sidesOrderList;
        document.getElementById("sidesPrice").innerHTML = "$" + sidesSum + ".00";
    });
    });
});

