// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(lowerCaseArray);
console.log(upperCaseArray);
console.log(numericCharacterArray);
console.log(specialCharacterArray);

function generatePassword() {
  var passwordLength = prompt("How many characters should your password be?");
  console.log(passwordLength);
  passwordLength = parseInt(passwordLength, 10);
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Passwords must be at least 8 characters and at most 128 characters.");
    var passwordLength = prompt("How many characters should your password be?");
    console.log(passwordLength);
    passwordLength = parseInt(passwordLength, 10);
    console.log(passwordLength);
  }
  var lowerCase = confirm("Should lower case letters be included?");
  var upperCase = confirm("Should upper case letters be included?");
  var numericCharacter = confirm("Should numeric characters be included?");
  var specialCharacter = confirm("Should special characters be included?");
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numericCharacter);
  console.log(specialCharacter);
  if ((lowerCase !== true) && (upperCase !== true) && (numericCharacter !== true) && (specialCharacter !== true)) {
    alert("Please select at least one character type.");
    var lowerCase = confirm("Should lower case letters be included?");
    var upperCase = confirm("Should upper case letters be included?");
    var numericCharacter = confirm("Should numeric characters be included?");
    var specialCharacter = confirm("Should special characters be included?");
    console.log(lowerCase);
    console.log(upperCase);
    console.log(numericCharacter);
    console.log(specialCharacter);
  }
  
  var availableCharacterArray = [];  
  if (lowerCase === true) {
    availableCharacterArray = availableCharacterArray.concat(lowerCaseArray);
    console.log(availableCharacterArray);
  }
  if (upperCase === true) {
    availableCharacterArray = availableCharacterArray.concat(upperCaseArray);
    console.log(availableCharacterArray);
  }
  if (numericCharacter === true) {
    availableCharacterArray = availableCharacterArray.concat(numericCharacterArray);
    console.log(availableCharacterArray);
  }
  if (specialCharacter === true) {
    availableCharacterArray = availableCharacterArray.concat(specialCharacterArray);
    console.log(availableCharacterArray);
  }
 
  var i = 0;
  var passwordResult = "";
  while (i < passwordLength) {
    passwordResult += availableCharacterArray[Math.floor(Math.random() * availableCharacterArray.length)];
    i++;
  }
  console.log(passwordResult);
  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
