const createPrompt = require("prompt-sync");
// create a new prompt function with the create function.
const prompt = createPrompt();
function getString(message) {
    let result;
    do {
        result = prompt(message).trim();
        if (result.length === 0) {
            console.log("Input cannot be empty or blank.");
        }
    } while (result.length === 0);
    return result;
}
function getInt(message, min, max) {
    let result;
    do {
        result = parseInt(getString(message), 10);
        if (isNaN(result)) {
            console.log(`Please enter a number between ${min} and ${max}.`)
        } else if (result < min) {
            console.log(`${result} is too small.`);
        } else if (result > max) {
            console.log(`${result} is too big.`);
        }
    } while (isNaN(result) || result < min || result > max);
    return result;
}
console.log("The type of module.exports is ", typeof module.exports);
console.log("And its value is ", module.exports);
module.exports.getString = getString;
module.exports.getInt = getInt;
// module.exports = {
//     readRequiredString: readRequiredString,
//     readInt: readInt
// }
// module.exports = {
//     readRequiredString,
//     readInt
// }