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
    hotDogForm.append("<input type='number' name='alaweenie' value='alaweenie'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='portlandia'>The Portlandia (Vegan Hot Dog) $3</label>");
    hotDogForm.append("<input type='number' name='theportlandia' value='theportlandia'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='phillyCheese'>Philly Cheese Hot Dog $6</label>");
    hotDogForm.append("<input type='number' name='phillycheesedog' value='phillycheesedog'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='chicagoStyleHotDog'>Chicago-Style Hot Dog $4</label>");
    hotDogForm.append("<input type='number' name='chicagostylehotdog' value='chicagostylehotdog'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='champaignCornDog'>Champaign Corn Dog $2</label>");
    hotDogForm.append("<input type='number' name='champaigncorndog' value='champaigncorndog'>");
    hotDogForm.append('<br>');
    hotDogForm.append("<label for='halloweenie'>Halloweenie (October Special) $5</label>");
    hotDogForm.append("<input type='number' name='halloweenie' value='halloweenie'>");
    hotDogForm.append('<br><br>');
    hotDogForm.append('<input type="button" value="Select Hot Dog(s)">');
    hotDogForm.append('<br><br>');
    
    hotDogItem.append('</form>');

    foodRow.append('</div>');

    //Coffee info:
    foodRow.append("<h3>Coffee:</h3>");
    foodRow.append("<div id='coffeeCol' class='col-sm-3'>");

    var coffeeItem = $('#coffeeCol');
    coffeeItem.append('<form id="coffeeForm" class="form-group">');
    
    var coffeeForm = $('#coffeeForm');
    coffeeForm.append("<label for='arabic'>Arabic (Black Coffee) $2</label>");
    coffeeForm.append("<input type='number' name='arabic' value='arabic'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='cappuccino'>Cappuccino (Double Expresso) $3</label>");
    coffeeForm.append("<input type='number' name='cappuccino' value='cappuccino'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='mocha'>Mocha (Chocolate-flavored) $3</label>");
    coffeeForm.append("<input type='number' name='mocha' value='mocha'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='espresso'>Espresso Coffee $2</label>");
    coffeeForm.append("<input type='number' name='espresso' value='espresso'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='latte'>Latte (Espresso & Steamed Milk) $3</label>");
    coffeeForm.append("<input type='number' name='latte' value='latte'>");
    coffeeForm.append('<br>');
    coffeeForm.append("<label for='weeklyFlavor'>Flavor Of The Week $5</label>");
    coffeeForm.append("<input type='number' name='weeklyflavor' value='weeklyflavor'>");
    coffeeForm.append('<br><br>');
    coffeeForm.append('<input type="button" value="Select Coffee(s)">');
    coffeeForm.append('<br><br>');

    coffeeItem.append('</form>');

    foodRow.append('</div>');

    //Sides info:
    foodRow.append("<h3>Sides:</h3>");
    foodRow.append("<div id='sidesCol' class='col-sm-3'>");

    var sidesItem = $('#sidesCol');
    sidesItem.append('<form id="sidesForm" class="form-group">');

    var sidesForm = $('#sidesForm');

    sidesForm.append("<label for='frenchFries'>French Fries (Steak-frie Style) $2</label>");
    sidesForm.append("<input type='number' name='frenchfries' value='frenchfries'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='voodoodonut'>VooDoo Donut (Crazy Donut!) $4</label>");
    sidesForm.append("<input type='number' name='voodoodonut' value='voodoodonut'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='deepDishBites'>Deep Dish Pizza Bites $5</label>");
    sidesForm.append("<input type='number' name='deepdishbites' value='deepdishbites'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='phillyPoundCake'>Philly Pound Cake $3</label>");
    sidesForm.append("<input type='number' name='phillypoundcake' value='phillypoundcake'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='avocadoToast'>Avocado Toast (Healthy Side) $2</label>");
    sidesForm.append("<input type='number' name='avocadotoast' value='avocadotoast'>");
    sidesForm.append('<br>');
    sidesForm.append("<label for='bureek'>Bureek (Spinach & Cheese Side) $3</label>");
    sidesForm.append("<input type='number' name='bureek' value='bureek'>");
    sidesForm.append('<br><br>');
    sidesForm.append('<input type="submit" value="Select Sides">');
    sidesForm.append('<br><br>');

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
    orderList.append("<li id='dogsOrder'>Hot Dog</li>");
    orderList.append("<li id='coffeeOrder'>Coffee</li>");
    orderList.append("<li id='sidesOrder'>Sides</li>");
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

    });
});

