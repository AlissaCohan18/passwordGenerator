// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt for password criteria when button is clicked

// booleon for: lwr/upr case, numeric, and special char 

// #char from 8-128

// validation??? Then my input should be v and at least 1 char type should be selected"

// generate password based on criteria

//display on screen (or alert)