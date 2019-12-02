// This will create our password
function gener8Pswd() {

    //sets the password length
    let complexity = document.getElementById("slider").value;
    console.log("The new slider/complexity value is " + complexity);

    //password strings
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_=-+0123456789";

    let password = "";

    //For Loop
    for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // Send to text area
    document.getElementById("yourPw").value = password;
    console.log("Your password is " + password);
}


// This will get the text area box content to copy to clipboard.
function copyPswd() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}



// Trying something new 
console.log("The slider value is " + slider.value);
document.getElementById("length").innerHTML = "Length: 68";

// Slider live data
document.getElementById("slider").oninput = function (){
    
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
    }
}

