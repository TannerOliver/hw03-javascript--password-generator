// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/*
Pseudocoding

- Need to know how many characters the password will have
- Need to know are special characters included
- Need to know are numbers in cluded
- Need to know are lower case letters included
- Need to know are upper case letters included

- build final list of possible characters here
"8 - 128"
" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
"123456789"
"abcdefghijklmnopqrstuvwxyz"
"ABCDEFGHIJKLMNOPQRSTUVWXYZ"


- We need a way to store all the possible characters allowed in the password

- How can we build our password one letter at a time?
for each character needed, grab a random element from the allowed list
*/

//write function here ~TBO
function howManyCharacters() {
  var numberOfCharacters = window.prompt("Please enter number of characters you would like.", ("8-128"));
  console.log(numberOfCharacters);
  return numberOfCharacters;
};

function wantNumbers() {
  var getNumbers = window.confirm("Would you like to use numbers?");
  console.log(getNumbers);
  return getNumbers;
};

function wantSpecial() {
  var getSpecial = window.confirm("Would you like to use Special Characters?");
  console.log(getSpecial);
  return getSpecial;
};

function wantLowercase() {
  var getLower = window.confirm("Would you like to use Lower Case Letters?");
  console.log(getLower);
  return getLower;
};

function wantUppercase() {
  var getUpper = window.confirm("Would you like to use Upper Case Letters?");
  console.log(getUpper);
  return getUpper;
};

function generatePassword() {
  var finalPassword = "";
  var numberOfCharacters = howManyCharacters();
  var getNumbers = wantNumbers();
  var getSpecial = wantSpecial();
  var getLower = wantLowercase();
  var getUpper = wantUppercase();
  validation(numberOfCharacters, getNumbers, getSpecial, getLower, getUpper);
  return finalPassword;
};

function validation(numberOfCharacters, getNumbers, getSpecial, getLower, getUpper) {
  window.confirm("Are these correct?");
  if (numberOfCharacters >= 8 || numberOfCharacters <= 128){
    if (getNumbers === true || getSpecial === true || getLower === true || getUpper === true){
      buildPassword(numberOfCharacters, getNumbers, getSpecial, getLower, getUpper);
    }
  }
};

function buildPassword(numberOfCharacters, getNumbers, getSpecial, getLower, getUpper) {
  var allCharacters = "";
  if (getNumbers === true) {allCharacters = allCharacters.concat(numbers)};
  
  if (getSpecial === true) {allCharacters = allCharacters.concat(specialCharacters)};

  if (getLower === true) {allCharacters = allCharacters.concat(lowercase)};

  if (getUpper === true) {allCharacters = allCharacters.concat(uppercase)};
  console.log(allCharacters);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);