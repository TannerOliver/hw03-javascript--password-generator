// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  ";",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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

allCharacters = (numberOfCharacters, allCharacters) => 
function {
let password = "";
for (let i = 0; i < numberOfCharacters; i++
  ) {
    password += allCharacters.charAt(Math.floor(Math.random() *
    allCharacters.numberOfCharacters)
    );
  }
};

Under Generate password
var finalPassword = "";
*/

//write function here ~TBO
function howManyCharacters() {
  var numberOfCharacters = window.prompt(
    "Please enter number of characters you would like.",
    "8-128"
  );
  console.log(numberOfCharacters);
  numberOfCharacters = parseInt(numberOfCharacters);
  console.log(numberOfCharacters);
  return numberOfCharacters;
}

function wantNumbers() {
  var getNumbers = window.confirm("Would you like to use numbers?");
  console.log(getNumbers);
  return getNumbers;
}

function wantSpecial() {
  var getSpecial = window.confirm("Would you like to use Special Characters?");
  console.log(getSpecial);
  return getSpecial;
}

function wantLowercase() {
  var getLower = window.confirm("Would you like to use Lower Case Letters?");
  console.log(getLower);
  return getLower;
}

function wantUppercase() {
  var getUpper = window.confirm("Would you like to use Upper Case Letters?");
  console.log(getUpper);
  return getUpper;
}

function validation(
  numberOfCharacters,
  getNumbers,
  getSpecial,
  getLower,
  getUpper
) {
  window.confirm("Are these correct?");
  if (numberOfCharacters >= 8 || numberOfCharacters <= 128);
  if (
    getNumbers === true ||
    getSpecial === true ||
    getLower === true ||
    getUpper === true
  ) {
    buildPassword(getNumbers, getSpecial, getLower, getUpper);
  }
}

function buildPassword(getNumbers, getSpecial, getLower, getUpper) {
  var allCharacters = "";

  if (getNumbers === true) {
    allCharacters = allCharacters.concat(numbers);
  }

  if (getSpecial === true) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  if (getLower === true) {
    allCharacters = allCharacters.concat(lowercase);
  }

  if (getUpper === true) {
    allCharacters = allCharacters.concat(uppercase);
  }

  console.log(allCharacters);
  return allCharacters
}

function generatePassword() {
   numberOfCharacters = howManyCharacters();
   getNumbers = wantNumbers();
   getSpecial = wantSpecial();
   getLower = wantLowercase();
   getUpper = wantUppercase();

   var choices = buildPassword(getNumbers, getSpecial, getLower, getUpper);
   console.log(choices)

  validation(numberOfCharacters, getNumbers, getSpecial, getLower, getUpper);

  password = [];
  console.log(choices);
  for (var i = 0; i < numberOfCharacters; i++) {
    password.unshift(choices[Math.floor(Math.random()* 10)+ 1])
    console.log(password);
    var finalPassword = password.join('')
  }
  console.log(finalPassword);
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
