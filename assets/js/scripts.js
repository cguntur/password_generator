// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    var passwordLength = getPasswordLength();
    console.log("Password Length 1: " + passwordLength);

    do{
        var lowerCaseType = getCharacterType("lowercase");
        console.log("Lowercase: " + lowerCaseType);

        var upperCaseType = getCharacterType("uppercase");
        console.log("Upper Case Type: " + upperCaseType);

        var numeric = getCharacterType("numeric");
        console.log("Numeric: " + numeric);

        var special = getCharacterType("special");
        console.log("Special Characters: " + special);

        if(!lowerCaseType && !upperCaseType && !numeric && !special){
            alert("You have to select at least one character type.");
        }

    }while(!lowerCaseType && !upperCaseType && !numeric && !special);

    

    var password = "";

    let str = "";

    if(lowerCaseType){
        str += "abcdefghijklmnopqrstuvwxyz";
    }

    if(upperCaseType){
        str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(numeric){
        str += "0123456789";
    }

    if(special){
        str += "@#$()*!%^&-_~";
    }
 
    for (let i = 1; i <= passwordLength; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        password += str.charAt(char);
    }

    return password;

    console.log("New Pwd: " + pass);
}

function getPasswordLength(){

    var passwordLength = 0;
    do {
        passwordLength = prompt("Please enter the number of characters for the password.");
        passwordLength = parseInt(passwordLength);

        if(passwordLength < 8 || passwordLength > 128){
            window.alert("Password length needs to be between 8 and 128 characters long.");
        }

    } while(passwordLength < 8 || passwordLength > 128);
    return passwordLength;
}

function getCharacterType(characterType){
    var type = confirm("Would you like to include " + characterType + " characters in your password?");
    return type;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);