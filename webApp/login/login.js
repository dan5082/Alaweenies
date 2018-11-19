/*
Project for CS411 (Database Systems) at the University of Illinois
Alaweenie's Hot Dogs & Coffee Online Ordering & Delivery App
Developed by Danny Dore, Daniel Niewierowski, Justin Isla, and Aayush Mishra
2018
*/

/*
-----------------------------------------------------------------------------
Function Name: launchSignUp
Parameters: None
Returns: None
This function launches the sign up feature.
-----------------------------------------------------------------------------
*/
$(function () {
    //This is a function to launch the sign up feature:
    $('#signUpButt').click(function () {
        //Remove both the sign up and sign in button:
        $("#signInButt").remove();
        $("#signUpButt").remove();

        //Add the sign up page:
        var loginBox = $("#loginBox");

        loginBox.append("<div id='firstNameArea' class='form-group'>");
        var emailArea = $("#firstNameArea");
        emailArea.append('<label for="firstName">First Name</label>');
        emailArea.append('<input type="email" class="form-control" id="firstNameInput" aria-describedby="emailHelp" placeholder="Taylor">');
        loginBox.append('</div>');

        loginBox.append("<div id='lastNameArea' class='form-group'>");
        var testArea = $("#lastNameArea");
        testArea.append('<label for="lastName">Last Name</label>');
        testArea.append('<input type="email" class="form-control" id="lastNameInput" aria-describedby="emailHelp" placeholder="Smith">');
        loginBox.append('</div>');

        loginBox.append("<div id='emailArea' class='form-group'>");
        var testArea1 = $("#emailArea");
        testArea1.append('<label for="email">Email Address</label>');
        testArea1.append('<input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="taylorsmith@outlook.com">');
        loginBox.append('</div>');

        loginBox.append("<div id='passwordArea' class='form-group'>");
        var passwordArea = $("#passwordArea");
        passwordArea.append('<label for="password">Password</label>');
        passwordArea.append('<input type="password" class="form-control" id="birthYearInput" placeholder="********">');
        loginBox.append('</div>');

        loginBox.append("<div id='phoneNumberArea' class='form-group'>");
        var testArea2 = $("#phoneNumberArea");
        testArea2.append('<label for="phoneNumber">Phone Number</label>');
        testArea2.append('<input type="email" class="form-control" id="phoneNumberInput" aria-describedby="emailHelp" placeholder="123-456-7890">');
        loginBox.append('</div>');

        loginBox.append("<div id='dateOfBirthArea' class='form-group'>");
        var testArea3 = $("#dateOfBirthArea");
        testArea3.append('<label for="dateOfBirth">Date of Birth</label>');
        testArea3.append('<input type="date" class="form-control" id="dateOfBirthInput" aria-describedby="emailHelp" placeholder="mm/dd/yyyy">');
        loginBox.append('</div>');;

        loginBox.append("<div id='preferredLocationArea' class='form-group'>");
        var testArea4 = $("#preferredLocationArea");
        testArea4.append('<label for="preferredLocation">Preferred Location</label>');
        testArea4.append('<select class="form-control" id="preferredLocationInput">');

        var preferredLocationInput = $("#preferredLocationInput");
        preferredLocationInput.append('<option>Champaign, IL</option>');
        preferredLocationInput.append('<option>Chicago, IL</option>');
        preferredLocationInput.append('<option>Philidelphia, PA</option>');
        preferredLocationInput.append('<option>Portland, OR</option>');
        testArea4.append('</select>');
        loginBox.append('</div>');

        loginBox.append("<div id='hotRewardsArea' class='form-group'>");
        var testArea5 = $("#hotRewardsArea");
        testArea5.append('<label for="hotRewards">Join Hot Rewards?</label>');
        testArea5.append("<div id='helloOne'>");
        var helloOne = $("#helloOne");
        helloOne.append('<input type="radio" class="form-check-input" id="yesRewards" name="yesRewards" value="yes" checked>Yes');
        testArea5.append("</div>");
        testArea5.append("<div id='helloTwo'>");
        var helloTwo = $("#helloTwo");
        helloTwo.append('<input type="radio" class="form-check-input" id="noRewards" name="noRewards" value="no">No');
        testArea5.append("</div>");
        loginBox.append('</div>');
        
        loginBox.append('<button id="registerButt" type="submit" class="btn btn-success">Register</button>');
        loginBox.append('<a id="backButt" href="login.html" role="button" class="btn btn-secondary">Back</a>');
    })

    //This is a function to launch the login feature:
    $('#signInButt').click(function () {
        //Remove both the sign up and sign in button:
        $("#signInButt").remove();
        $("#signUpButt").remove();

        //Add the sign up page:
        var loginBox = $("#loginBox");
        
        loginBox.append("<div id='emailArea' class='form-group'>");
        var emailArea = $("#emailArea");
        emailArea.append('<label for="exampleInputEmail1">Email address</label>');
        emailArea.append('<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">');
        loginBox.append('</div>');

        loginBox.append("<div id='passwordArea' class='form-group'>");
        var passwordArea = $("#passwordArea");
        passwordArea.append('<label for="exampleInputPassword1">Password</label>');
        passwordArea.append('<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">');
        loginBox.append('</div>');

        loginBox.append('<button id="registerButt" type="submit" class="btn btn-primary">Login</button>');
        loginBox.append('<a id="backButt" href="login.html" role="button" class="btn btn-secondary">Back</a>');
    })
});

