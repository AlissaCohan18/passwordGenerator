// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var secure = false
  while (secure === false) {
    var lCase = window.confirm ("If a lowercase letter is needed, click OK to apply and continue, or Cancel to move on")
    var uCase = window.confirm ("If a uppercase letter is needed, Click OK to apply and continue, or Cancel to move on")
    var num = window.confirm ("If a number is needed, click OK to apply and continue, or Cancel to move on")
    var sChar = window.confirm ("If a special character is needed, click OK to apply and continue, or Cancel to move on")
    if (lCase === false && uCase === false && num === false && sChar === false){ 
       window.alert("***!At least One Character Type must be selected for a more secure password!***")
    } else {
       secure = true
      }
    }
  var ver = "not yet ;)"  
  while (ver != "validated") {
    var pLength = prompt("Choose password length (between 8-128 characters)")
      if (pLength > 7 && pLength < 129) {
       ver="validated"
      }
    }
}

// Math.floor(Math.random() * 101);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// generate password based on criteria

//display on screen (or alert)