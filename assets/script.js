// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var lCase = window.confirm ("If a lowercase letter is needed, click OK to apply and continue, or Cancel to move on")
  var uCase = window.confirm ("If a uppercase letter is needed, Click OK to apply and continue, or Cancel to move on")
  var num = window.confirm ("If a number is needed, click OK to apply and continue, or Cancel to move on")
  var sChar = window.confirm ("If a special character is needed, click OK to apply and continue, or Cancel to move on")
   var pLength = prompt("Choose password length (between 8-128 characters)")
   if (pLength > 7 && pLength < 129) {
    console.log("validated")
   }
   else {pLength = prompt("Choose password length (type a number between 8-128 characters)")}
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// validation??? Then my input should be v and at least 1 char type should be selected"

// generate password based on criteria

//display on screen (or alert)