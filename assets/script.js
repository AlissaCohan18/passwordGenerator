// hide password character selection until user clicks button
const hide = document.getElementById("hiddenform")
hide.style.visibility = "hidden";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password
function writePassword() {
  if (hide.style.visibility === "hidden") {
    hide.style.visibility = "visible"
  } else { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
}

// creates arrays for each ASCII group
function generateRandomInteger(min, max) {
   return Math.floor(min + Math.random()*(max - min + 1))
   }

// Password generator based on user selections
function generatePassword(){
   var passwordChars = []     
   var secure1 = false
   var secure2 = false
    //criteria validation
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
    window.alert("Password must contain at least one character type, with length of 8-128 characters")
  }
  else {
    //  used selected criteria
    var LOWER_CHAR = []
    var UPPER_CHAR = []
    var NUM_CHAR = []
    var SYMBOL_CHAR = []
    var count = 0

    while (count < pLength.value){
        if (lChar.checked === true) {
          LOWER_CHAR = generateRandomInteger(97,122)
          passwordChars.push(String.fromCharCode(LOWER_CHAR))
          count++
        }
        if (uChar.checked === true) {
          UPPER_CHAR = generateRandomInteger(65,90)
          passwordChars.push(String.fromCharCode(UPPER_CHAR))
          count++
        }
        if (numChar.checked === true){
          NUM_CHAR = generateRandomInteger(48,57)
          passwordChars.push(String.fromCharCode(NUM_CHAR))
          count++
        }
        if (sChar.checked === true) {
          SYMBOL_CHAR = generateRandomInteger(33,47)
              // .concat(
              // generateRandomInteger(58,64)).concat(
              // generateRandomInteger(91,96)).concat(
              // generateRandomInteger(123,126))
          passwordChars.push(String.fromCharCode(SYMBOL_CHAR))
          count++
        }
    }
  }
  // returns password array without commas
  return(passwordChars.join(''))     
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);