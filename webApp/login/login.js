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

