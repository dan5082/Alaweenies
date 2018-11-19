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
    hotDogItem.append('<form id="hotDogform"></form>');

    var hotDogForm = $('#hotDogform');
    hotDogForm.append("<input type='checkbox' name='alaweenie' value='alaweenie'> The Alaweenie $10");
    hotDogForm.append('<br>');
    hotDogForm.append("<input type='checkbox' name='theportlandia' value='theportlandia'> The Portlandia (Vegan) $3");
    hotDogForm.append('<br>');
    hotDogForm.append("<input type='checkbox' name='phillycheesedog' value='phillycheesedog'> Philly Cheese Dog $6");
    hotDogForm.append('<br>');
    hotDogForm.append("<input type='checkbox' name='chicagostylehotdog' value='chicagostylehotdog'> Chicago-Style Hot Dog $4");
    hotDogForm.append('<br>');
    hotDogForm.append("<input type='checkbox' name='champaigncorndog' value='champaigncorndog'> Champaign Corn Dog $2");
    hotDogForm.append('<br>');
    hotDogForm.append("<input type='checkbox' name='halloweenie' value='halloweenie'> Halloweenie (October) $5");
    hotDogForm.append('<br><br>');
    hotDogForm.append('<input type="button" value="Select Hot Dog">');
    hotDogForm.append('<br><br>');

    hotDogItem.append('</div>');

    //Coffee info:
    foodRow.append("<h3>Coffee:</h3>");
    foodRow.append("<div id='coffeeCol' class='col-sm-3'>");

    var coffeeItem = $('#coffeeCol');
    coffeeItem.append('<form id="coffeeform"></form>');

    coffeeItem.append("<input type='checkbox' name='arabic' value='arabic'> Arabic $2");
    coffeeItem.append('<br>');
    coffeeItem.append("<input type='checkbox' name='cappuccino' value='cappuccino'> Cappuccino $3");
    coffeeItem.append('<br>');
    coffeeItem.append("<input type='checkbox' name='mocha' value='mocha'> Mocha $3");
    coffeeItem.append('<br>');
    coffeeItem.append("<input type='checkbox' name='espresso' value='espresso'> Espresso $2");
    coffeeItem.append('<br>');
    coffeeItem.append("<input type='checkbox' name='latte' value='latte'> Latte $3");
    coffeeItem.append('<br>');
    coffeeItem.append("<input type='checkbox' name='weeklyflavor' value='weeklyflavor'> Flavor Of The Week $5");
    coffeeItem.append('<br><br>');
    coffeeItem.append('<input type="button" value="Select Coffee">');
    coffeeItem.append('<br><br>');

    foodRow.append('</div>');

    //Sides info:
    foodRow.append("<h3>Sides:</h3>");
    foodRow.append("<div id='sidesCol' class='col-sm-3'>");

    var sidesItem = $('#sidesCol');
    sidesItem.append('<form id="sidesform"></form>');

    sidesItem.append("<input type='checkbox' name='frenchfries' value='frenchfries'> French Fries $2");
    sidesItem.append('<br>');
    sidesItem.append("<input type='checkbox' name='voodoodonut' value='voodoodonut'> VooDoo Donut $4");
    sidesItem.append('<br>');
    sidesItem.append("<input type='checkbox' name='deepdishbites' value='deepdishbites'> Deep Dish Pizza Bites $5");
    sidesItem.append('<br>');
    sidesItem.append("<input type='checkbox' name='phillypoundcake' value='phillypoundcake'> Philly Pound Cake $3");
    sidesItem.append('<br>');
    sidesItem.append("<input type='checkbox' name='avocadotoast' value='avocadotoast'> Avocado Toast $2");
    sidesItem.append('<br>');
    sidesItem.append("<input type='checkbox' name='bureek' value='bureek'> Bureek $3");
    sidesItem.append('<br><br>');
    sidesItem.append('<input type="button" value="Select Sides">');
    sidesItem.append('<br><br>');

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

