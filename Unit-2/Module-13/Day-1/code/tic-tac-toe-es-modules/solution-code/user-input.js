import createPrompt from 'prompt-sync';
const prompt = createPrompt();

export function readRequiredString(message) {
    let result;
    do {
        result = prompt(message).trim();
        if (result.length === 0) {
            console.log("Input cannot be empty or blank.");
        }
    } while (result.length === 0);
    return result;
}

export function readInt(message, min, max) {
    let result;
    do 
    {
        result = parseInt(readRequiredString(message), 10);
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