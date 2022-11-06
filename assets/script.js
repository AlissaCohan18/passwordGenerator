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



function generatePassword(){
    var secure = false
    while (secure === false) {
      // var lCase = window.confirm ("If a lowercase letter is needed, click OK to apply and continue, or Cancel to move on")
      // var uCase = window.confirm ("If a uppercase letter is needed, Click OK to apply and continue, or Cancel to move on")
      // var num = window.confirm ("If a number is needed, click OK to apply and continue, or Cancel to move on")
      // var sChar = window.confirm ("If a special character is needed, click OK to apply and continue, or Cancel to move on")
      if (lChar === false && uChar === false && numChar === false && sChar === false){ 
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
 //need to pass vars (or constants through function) and then link to ascii
    // String.fromCharCode()
}

  // var passwordChars = []
  // for (i = 0; i <= pLength ; i++) {
  //   const character = charCodes[Math.floor(Math.random()*pLength.length)]
  //   passwordChars.push(String.fromCharCode(charCodes))
  // }
  //   return passwordChars.join('')

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

