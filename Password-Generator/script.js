// Variables to use
const passwordLength = 14;
const lowerCase = true;
const upperCase = true;
const includeNumbers = true;
const includeSymbols = true;

// generating password
function generatePassword(length, lowerCase, upperCase, includeNumbers, includeSymbols) {
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "#$%^&<>?*|@_!`~"

    let allowedChars = ""
    let password = ""

    allowedChars += lowerCase ? lowercase : "";
    allowedChars += upperCase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols: "";


    alert(allowedChars)
    return '';
}

const password = generatePassword(passwordLength, lowerCase, upperCase, includeNumbers, includeSymbols);
console.log(`Password: ${password}`);