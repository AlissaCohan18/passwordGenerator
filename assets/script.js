
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var secure1 = false
var secure2 = false
var passwordChars = []

function arrayLowToHigh(low,high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
}

function generatePassword(){
  if (lChar.checked === false && uChar.checked === false && numChar.checked === false && sChar.checked === false) { 
    secure1 = false
  } else {
    secure1 = true
  }
  if (pLength.value >= 8 && pLength.value <= 128) {
    secure2 = true
  } else {
    secure2 = false
  }
  if (secure1 == false || secure2 == false) {
    window.alert("Password must contain at least one special character and length of 8-128 to be secure")
  }
  else 
  
  var LOWER_CHAR = []
  var UPPER_CHAR = []
  var NUM_CHAR = []
  var SYMBOL_CHAR = []


//  used selected criteria
  
      if (lChar.checked === true) {
        LOWER_CHAR = arrayLowToHigh(97,122)
      
      }
      if (uChar.checked === true) {
        UPPER_CHAR = arrayLowToHigh(65,90)

      }
      if (numChar.checked === true){
        NUM_CHAR = arrayLowToHigh(48,57)

      }
      if (sChar.checked === true) {
        SYMBOL_CHAR = arrayLowToHigh(33,47)
            // .concat(
            // arrayLowToHigh(58,64)).concat(
            // arrayLowToHigh(91,96)).concat(
            // arrayLowToHigh(123,126))
       
      }
   
   
      for (i = 0; i<pLength.value ; i++) {
        var newChar = Math.floor(Math.random()*127)
        passwordChars.push(String.fromCharCode(newChar))
        }
    // returns password array without comma's
      return(passwordChars.join(''))     
    }

      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);