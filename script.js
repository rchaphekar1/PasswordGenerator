// Assignment Code
var generateBtn = document.querySelector("#generate");

// Initializes and sets the lower case, upper case, numeric, and special character arrays
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Records array in console to ensure functionality
console.log(lowerCaseArray);
console.log(upperCaseArray);
console.log(numericCharacterArray);
console.log(specialCharacterArray);

// Defines the function to generate the random password
function generatePassword() {
  // Prompts the user to enter the number of characters, and saves it as variable passwordLength
  var passwordLength = prompt("How many characters should your password be?");
  console.log(passwordLength);
  // Converts the user entered string to a number and returns NaN if it is not
  passwordLength = parseFloat(passwordLength);
  console.log(passwordLength);
  // Validates that the user input is a number, an integer, and in the desired range of characters
  while ((passwordLength === NaN) || (Number.isInteger(passwordLength) === false) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter an integer value between 8 and 128.");
    // Reprompts user if conditions are not met
    var passwordLength = prompt("How many characters should your password be?");
    console.log(passwordLength);
    passwordLength = parseFloat(passwordLength);
    console.log(passwordLength);
  }
  // A series of confirm windows asking the user what types of characters should be included
  var lowerCase = confirm("Should lower case letters be included?");
  var upperCase = confirm("Should upper case letters be included?");
  var numericCharacter = confirm("Should numeric characters be included?");
  var specialCharacter = confirm("Should special characters be included?");
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numericCharacter);
  console.log(specialCharacter);
  // Checks to see if no character types were selected, and alerts the user if so
  while ((lowerCase !== true) && (upperCase !== true) && (numericCharacter !== true) && (specialCharacter !== true)) {
    alert("Please select at least one character type.");
    // Reprompts the user if this is the case
    var lowerCase = confirm("Should lower case letters be included?");
    var upperCase = confirm("Should upper case letters be included?");
    var numericCharacter = confirm("Should numeric characters be included?");
    var specialCharacter = confirm("Should special characters be included?");
    console.log(lowerCase);
    console.log(upperCase);
    console.log(numericCharacter);
    console.log(specialCharacter);
  }
  
  // Initializes availableCharacterArray as an empty array
  var availableCharacterArray = [];  
  // Checks to see if each character type should be included, and concatenates them to the availableCharacterArray if so
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
 
  //Initializes the password as an empty string
  var i = 0;
  var passwordResult = "";
  // Runs while loop while i is less than the password length
  while (i < passwordLength) {
    // Adds characters at a randomly chosen index to the passwordResult string
    passwordResult += availableCharacterArray[Math.floor(Math.random() * availableCharacterArray.length)];
    // Increments the counter i
    i++;
  }
  console.log(passwordResult);
  // Returns the password after running the function
  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  // Stores the passwordResult variable returned by the generatePassword function and stores it in new variable password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
