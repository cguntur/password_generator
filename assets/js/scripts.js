// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //call the generatePassword function when the button is clicked
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//geratarePassword function
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

    //Getting the character types

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
 
    //Generating the password
    for (let i = 1; i <= passwordLength; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        password += str.charAt(char);
    }

    return password;
}

//custom function to get the password length from the user
function getPasswordLength(){

    //Setting the initial value of the passwordLength variable to 0
    var passwordLength = 0;
    var isValid = false;

    //Using a do while loop to make sure that the prompt is shown until the passwordLength is between 8 & 128
    do {
        passwordLength = prompt("Please enter the number of characters for the password.");
        
        //Checking to make sure the user entered a number
        passwordLength = parseInt(passwordLength);
        console.log("Password Length: " + passwordLength);

        if(!isNaN(passwordLength) ){
            isValid = true;
        }else{
            window.alert("Password Length needs to be a number. Please try again.");
        }

        //Checking to make sure the password is between 8 and 128 characters
        if(passwordLength >= 8 && passwordLength <= 128){
            isValid = true;
        }else{
            window.alert("Password length needs to be between 8 and 128 characters long.");
            isValid = false;
        }

    } while(!isValid);
    return passwordLength;
}

//Get the character types required from the user
function getCharacterType(characterType){
    var type = confirm("Would you like to include " + characterType + " characters in your password?");
    return type;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);