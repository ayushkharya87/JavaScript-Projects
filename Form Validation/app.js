let username = document.getElementById("username");
let password = document.getElementById("password");
let vald = 1;

function validation() {
    if(username.value == "") {
        document.getElementById("userError").innerHTML = "User Name is empty.";
        vald = 0;
    } else if(username.value.length < 5) {
        document.getElementById("userError").innerHTML = "User Name require min 5 character.";
        vald = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        vald = 1;
    }

    if(password.value == "") {
        document.getElementById("passError").innerHTML = "Password is empty.";
        vald = 0;
    } else if(password.value.length < 5) {
        document.getElementById("passError").innerHTML = "Password require min 5 character.";
        vald = 0;
    } else {
        document.getElementById("passError").innerHTML = "";
        vald = 1;
    }
    
    if(vald) {
        return true;
    } else {
        return false;
    }
}