// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordDisplay = document.querySelector("#password");

  passwordDisplay.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function for generating the array of password character options - using place holder values that will be replaced when function is called

function generatePasswordChoices(shouldUseSpecialCharacters, shouldUseNumbers, shoulderUseLowerCase, shouldUseUpperCase) {

  //declare the arrays for the character options. Declare empty array for the final array once function is completed

  var combinedPasswordChoices = [];
  
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  var characters = specialCharacters.split ("");
  
  var numbers = [0, 1, 2, 3, 4, 5, 6, 8, 9]
  
  var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
 if (shouldUseSpecialCharacters) {
   combinedPasswordChoices = characters.concat(combinedPasswordChoices);
 }
 if (shouldUseNumbers) {
  combinedPasswordChoices = numbers.concat(combinedPasswordChoices);
 }
 if (shoulderUseLowerCase) {
  combinedPasswordChoices = lettersLower.concat(combinedPasswordChoices);
 }
 if (shouldUseUpperCase) {
  combinedPasswordChoices = lettersUpper.concat(combinedPasswordChoices);
 }
 return combinedPasswordChoices
}

// function for generating the password using the array

function generatePassword() {
  var passwordLength = parseInt(prompt("Enter password length (must be between 8 and 128 characters)."));
  
  var isPasswordLengthNotValid = passwordLength < 8 || passwordLength > 128;
  while (isPasswordLengthNotValid) {
      passwordLength = parseInt(prompt("Password must be between 8 and 128 characters. Enter password length."));
      isPasswordLengthNotValid = passwordLength < 8 || passwordLength > 128;
  }


  var confirmSpecialCharacter = confirm("Would you like to include special characters?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmLettersLower = confirm("Would you like to include lower case letters?");
  var confirmLettersUpper = confirm("Would you like to include upper case letters?");
  

  var passwordChoices = generatePasswordChoices(confirmSpecialCharacter, confirmNumbers, confirmLettersLower, confirmLettersUpper)

 var password = "";

 for (var i = 0; i < passwordLength; i++) {

  var randomCharacter = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
  password += randomCharacter;
 }

 return password

} 




