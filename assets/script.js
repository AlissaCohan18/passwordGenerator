
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function arrayLowToHight(low,high) {
//   for (let i=low; i<=high; i++) {
//   }
// }

// const NUM_CHAR = arrayLowToHight(48,57)
// const UPPER_CHAR = arrayLowToHight(65,90)
// const LOWER_CHAR = arrayLowToHight(97,122)
// const SYMBOL_CHAR = arrayLowToHight(33,47).concat(
//   arrayLowToHight(58,64)).concat(
//   arrayLowToHight(91,96)).concat(
//   arrayLowToHight(123,126))


// var lchar = document.querySelector('lchar')

var secure1 = false
var secure2 = false


function generatePassword(){
 
    console.log(lChar.checked, uChar.checked, numChar.checked, sChar.checked, pLength.value)
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
    console.log("ALL GOOD, SECURE")
}
 //need to pass vars (or constants through function) and then link to ascii
    // String.fromCharCode()
// }

  // var passwordChars = []
  // for (i = 0; i <= pLength ; i++) {
  //   const character = charCodes[Math.floor(Math.random()*pLength.length)]
  //   passwordChars.push(String.fromCharCode(charCodes))
  // }
  //   return passwordChars.join('')

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

