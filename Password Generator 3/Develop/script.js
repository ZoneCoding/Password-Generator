// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // window.prompt or prompt to show message
  var userInput = window.prompt("Length of Password.");


  var passwordLength = parseInt(userInput);
// if value return is not a number then message relays
    if (isNaN(passwordLength)) {
      window.alert("Not a number, try again...")
      return; 
    }

    //
    if (passwordLength < 8 ||  passwordLength > 128) {
      window.alert("Password must be between 8 to 128 characters")
      return;
    }

   /*if (confirmNumbers === true) {
      allcharacters = allcharacters.concat(numberList)
    }*/

    //prompt confirmations 
  var confirmNumbers = window.confirm("Include numbers in password?");
  var confirmLowercase = window.confirm("Include lowercase in password?");
  var confirmUppercase = window.confirm("Include uppercase in password?");
  var confirmSymbols = window.confirm("Include symbols in password?");

    //arrays for random outcome...
    var numberList = ['0','1','3','4','5','6','7','8','9']
    var symbolList = ['!','@','#','$','%','^','&','*','?','.','-','_']
    var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var uppercaseList = []

    var arrayList = []


    for (var i = 0; i < lowercaseList.length; i++) {
      uppercaseList[i] = lowercaseList[i].toUpperCase()
    }

    if (confirmNumbers === true) {
      //arrayList.push(numberList)
      arrayList = arrayList.concat(numberList)
    }
    if (confirmLowercase === true) {
      //arrayList.push(lowercaseList)
      arrayList = arrayList.concat(lowercaseList)
    }
    if (confirmUppercase === true) {
      //arrayList.push(uppercaseList)
      arrayList = arrayList.concat(uppercaseList)
    }
    if (confirmSymbols === true) {
      //arrayList.push(symbolList)
      arrayList = arrayList.concat(symbolList)
    }



    var generatedPassword = "Spare my Soul Boss"

    for (var i = 0; i < passwordLength; i++) {
      var randomItem = arrayList[randomInt(0, arrayList.length - 1)]
    } 

  console.log(arrayList) 
  return generatedPassword
}


function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
}

function getRandomItem() {
  return list[randomInt(0, list.length - 1)]
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
