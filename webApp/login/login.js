/*
Project for CS411 (Database Systems) at the University of Illinois
Alaweenie's Hot Dogs & Coffee Online Ordering & Delivery App
Developed by Danny Dore, Daniel Niewierowski, Justin Isla, and Aayush Mishra
2018
*/

$(function () {
    //This is a function to launch the sign up feature:
    $('#signUpButt').click(function () {
        //Remove both the sign up and sign in button:
        $("#signInButt").remove();
        $("#signUpButt").remove();

        //Add the sign up page:
        var loginBox = $("#loginBox");

        loginBox.append("<form id='signupForm' method='post'>");

        var signUpForm = $("#signupForm");

        signUpForm.append("<div id='firstNameArea' class='form-group'>");
        var emailArea = $("#firstNameArea");
        emailArea.append('<label for="firstName">First Name</label>');
        emailArea.append('<input type="text" class="form-control" id="firstNameInput" name="firstName" placeholder="Taylor" required>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='lastNameArea' class='form-group'>");
        var lastNameArea = $("#lastNameArea");
        lastNameArea.append('<label for="lastName">Last Name</label>');
        lastNameArea.append('<input type="text" class="form-control" id="lastNameInput" name="lastName" placeholder="Smith" required>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='emailArea' class='form-group'>");
        var emailArea = $("#emailArea");
        emailArea.append('<label for="email">Email Address</label>');
        emailArea.append('<input type="email" class="form-control" id="emailInput" name="email" placeholder="taylorsmith@outlook.com" required>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='passwordArea' class='form-group'>");
        var passwordArea = $("#passwordArea");
        passwordArea.append('<label for="password">Password</label>');
        passwordArea.append('<input type="password" class="form-control" id="birthYearInput" name="password" placeholder="********" required>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='phoneNumberArea' class='form-group'>");
        var phoneNumberArea = $("#phoneNumberArea");
        phoneNumberArea.append('<label for="phoneNumber">Phone Number</label>');
        phoneNumberArea.append('<input type="tel" class="form-control" id="phoneNumberInput" name="phoneNumber" placeholder="123-456-7890" required>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='dateOfBirthArea' class='form-group'>");
        var dobArea = $("#dateOfBirthArea");
        dobArea.append('<label for="dateOfBirth">Date of Birth</label>');
        dobArea.append('<input type="date" class="form-control" id="dateOfBirthInput" name="dob" placeholder="mm/dd/yyyy" required>');
        signUpForm.append('</div>');;

        signUpForm.append("<div id='preferredLocationArea' class='form-group'>");
        var locationArea = $("#preferredLocationArea");
        locationArea.append('<label for="preferredLocation">Preferred Location</label>');
        locationArea.append('<select class="form-control" name = "preferredLocation" id="preferredLocationInput">');

        var preferredLocationInput = $("#preferredLocationInput");
        preferredLocationInput.append('<option>Champaign, IL</option>');
        preferredLocationInput.append('<option>Chicago, IL</option>');
        preferredLocationInput.append('<option>Philidelphia, PA</option>');
        preferredLocationInput.append('<option>Portland, OR</option>');
        locationArea.append('</select>');
        signUpForm.append('</div>');

        signUpForm.append("<div id='hotRewardsArea' class='form-group'>");
        var rewardsArea = $("#hotRewardsArea");
        rewardsArea.append('<label for="hotRewards">Join Hot Rewards?</label>');
        rewardsArea.append('<select class="form-control" name="hotRewards" id="hotRewardsInput">');
        var hotRewardsInput = $("#hotRewardsInput");
        hotRewardsInput.append('<option>Yes</option>');
        hotRewardsInput.append('<option>No</option>');
        rewardsArea.append('</select>');
        
        signUpForm.append('<button id="registerButt" type="submit" class="btn btn-success">Register</button>');
        loginBox.append("</form>");
        loginBox.append('<a id="backButt" href="login.html" role="button" class="btn btn-secondary">Back</a>');
    })

    //This is a function to launch the login feature:
    $('#signInButt').click(function () {
        //Remove both the sign up and sign in button:
        $("#signInButt").remove();
        $("#signUpButt").remove();

        //Add the log in page:
        var loginBox = $("#loginBox");
        
        loginBox.append("<form id='loginForm' method='post'>");

        var loginForm = $("#loginForm");

        loginForm.append("<div id='emailArea' class='form-group'>");
        var emailArea = $("#emailArea");
        emailArea.append('<label for="exampleInputEmail1">Email address</label>');
        emailArea.append('<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required>');
        loginForm.append('</div>');

        loginForm.append("<div id='passwordArea' class='form-group'>");
        var passwordArea = $("#passwordArea");
        passwordArea.append('<label for="exampleInputPassword1">Password</label>');
        passwordArea.append('<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>');
        loginForm.append('</div>');

        loginForm.append('<button id="registerButt" type="submit" class="btn btn-primary">Login</button>');
        loginBox.append("</form>");
        loginBox.append('<a id="backButt" href="login.html" role="button" class="btn btn-secondary">Back</a>');
    })
});

