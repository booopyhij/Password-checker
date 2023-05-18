  // variables for the password to generate from
var generateBtn = document.querySelector("#generate");
var characterList = {
    specialCharacters: ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '~', '<', '>', '?'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    lowerCaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'x', 'y', 'z'],
    upperCaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
'V', 'X', 'Y', 'Z' ]
} 







function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  // these pull up boxes to asking to confirm if they want these items included or not
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumbers = confirm(
    'Click OK to confirm including numbers.'
  );

  var hasLowerCaseLetters = confirm(
    'Click OK to confirm including lower case letters.'
  );

  var hasUpperCaseLetters = confirm(
    'Click ok to confirm including upper case letters.'
  )

   // Object to store user input 
   // these variables pull from the above if statements
   var passwordOptions = {
    length: length,
    hasSpecialCharacters,
    hasNumbers,
    hasLowerCaseLetters,
    hasUpperCaseLetters

   }

   return passwordOptions;
}



// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  // is empty to allow pulling from the above functions data
  var result = [];

  // Array to store types of characters to include in password
  // is empty to allow pulling from the above functions data
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  // is empty to allow pulling from the above functions data
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

   // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  // these allow for the function to grab and add a character from the specified array and add it into the 
  // new randomly generated array
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(characterList.specialCharacters);
    guaranteedCharacters.push(getRandom(characterList.specialCharacters));
  }
// 3 more if statements
if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(characterList.numbers);
    guaranteedCharacters.push(getRandom(characterList.numbers));
  }

  if (options.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(characterList.lowerCaseLetters);
    guaranteedCharacters.push(getRandom(characterList.lowerCaseLetters));
  }

  if (options.hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(characterList.upperCaseLetters);
    guaranteedCharacters.push(getRandom(characterList.upperCaseLetters));
  }

//for loops
// these loops allow for grabbing characters out of the arrays until the target number is hit
// i.e. they want a password 10 characters long, this will loop until it has pulled 10 characters
  for (var i=0; i < options.length; i++) {
    var possibleCharacter =getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i=0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters [i]
  }

    // Transform the result into a string and pass into writePassword
    return result.join('');
}

// Write password to the #password input
// this will populate the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
