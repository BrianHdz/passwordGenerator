// Variables 
var upperCase = (
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
);

var lowerCase = (
    "abcdefghijklmnopqrstuvwxyz"
);

var numbers = (
    "1234567890"
);

var specialChars = (
    "!@#$%^&*-=+"
);

var password = null;
var blank = null;
var newPassword = null;

// Trying something new 
// console.log("The slider value is " + slider.value);
document.getElementById("length").innerHTML = "Length: 68";

// Slider live data
document.getElementById("slider").oninput = function () {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }
}



// The Prompts to gather booleans, create the password and push it to the text area.
function gener8Pswd() {

    var addUpperCase = confirm("To add Upper Cased characters in your password, click OK!");
    if (addUpperCase == true) {
        var password = upperCase.concat(password);
    }
    else {
        var password = password;
    }
    console.log(password);

    var addLowerCase = confirm("To add Lower Cased characters in your password, click OK!");
    if (addLowerCase == true) {
        var password = lowerCase.concat(password);
    }
    else {
        var password = password;
    }
    console.log(password);

    var addNumbers = confirm("To add Numeric characters in your password, click OK!");
    if (addNumbers == true) {
        var password = numbers.concat(password);
    }
    else {
        var password = password;
    }
    console.log(password);

    var addSpecialChars = confirm("To add Special characters in your password, click OK!");
    if (addSpecialChars == true) {
        var password = specialChars.concat(password);
    }
    else {
        var password = password;
    }
    console.log(password);



    // Check for at least one boolean
    if (addUpperCase === false &&
        addLowerCase === false &&
        addNumbers === false &&
        addSpecialChars === false) {
        alert("Choose one type of character or more.");

    }
    console.log("They chose " + addUpperCase + addLowerCase + addNumbers
        + addSpecialChars);



    //sets the password length
    var complexity = document.getElementById("slider").value;
    console.log("The new slider/complexity value is " + complexity);

    // My Old For Loop
    for (var i = 0; i <= complexity; i++) {
        newPassword = newPassword + password.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)));
    }
    
    console.log("Your full password is " + newPassword);


    // Send password to text area
    document.getElementById("yourPw").value = newPassword;
    console.log("Your new password is " + newPassword);

    return newPassword;
}



// Send to text area
function pushPassword() {
    let myPassword = gener8Pswd();
    let yourPassword = document.getElementById("yourPw");

    yourPassword.value = myPassword;
}



// This will get the text area box content to copy to clipboard.
function copyPswd() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}