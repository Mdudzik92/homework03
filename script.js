// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["?", "/", "!", "@", "#", "$"]

function generatePassword() {
  var password = ""
  var characterOptions = []
  var response = prompt("How many characters? Between 8-128")
  var length = parseInt(response)
  if (length < 8 || length > 128) {
    alert("Length must be between 8-128")
    return ""
  }
  var wantLowercase = confirm("Do you want lowercase letters?")
  var wantUppercase = confirm("Do you want uppercase letters?")
  var wantNumbers = confirm("Would you like numbers in the password?")
  var wantSpecialChar = confirm("Do you want any special characters?")
  if (wantLowercase === false && wantUppercase === false && wantNumbers === false && wantSpecialChar === false) {
    alert("You did it wrong dude")
    return ""
  }
if (wantLowercase === true){
  characterOptions = characterOptions.concat(lowerCaseLetters)
}
if (wantUppercase === true){
  characterOptions = characterOptions.concat(upperCaseLetters)
}
if (wantNumbers === true){
  characterOptions = characterOptions.concat(numbers)
}
if (wantSpecialChar === true){
  characterOptions = characterOptions.concat(specialChar)
}
for(var i = 0; i < length; i++){
  var randomIndex = Math.floor(Math.random()*characterOptions.length)
  password += characterOptions[randomIndex]
}
return password 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
