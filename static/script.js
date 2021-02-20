/*
************* login functionality begin
*/
function checkLogin() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));

    if (user !== null && user !== "") {
        if (password !== null && password !== "") {

            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                window.location.href = "http://localhost:5000/dashboard";
                //window.location.href = "http://heroku:5000/dashboard";
            } else {
                alert("user or password are not correct");
            }

        } else {
            alert("password must not be empty");
        }
    } else {
        alert("user must not be empty");
    }

}

function checkLoginInfo(user, password, userArray) {
    if (userArray !== null && userArray.length > 0) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].user === user && userArray[i].password === password) {
                return true;
            }
        }
    }
    return false;
}

/*
************* login functionality end
*/


/*
************* register functionality begin
*/

function registerNewUser() {
    var reg_user = document.getElementById("user_reg").value;
    var reg_password = document.getElementById("passw_reg").value;

    //alert(reg_user);
    var userArray = [];

    if (sessionStorage.getItem("wUserArray") !== null) {
        userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    }

    var current_reg = {
        user: reg_user,
        password: reg_password
    };

    userArray.push(current_reg);

    sessionStorage.setItem("wUserArray", JSON.stringify(userArray));

    window.location.href = "http://localhost:5000/login"
    //window.location.href = "http://heroku:5000/login";
}

/*
************* register functionality end
*/
