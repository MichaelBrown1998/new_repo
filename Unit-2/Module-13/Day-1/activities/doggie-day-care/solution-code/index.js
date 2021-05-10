// creates a constant called prompt that calls the "prompt-sync"
// prompt-sync module is a function that creates prompting functions, 
// so you need to call prompt-sync in order to get your actual prompting function.
const prompt = require("prompt-sync")();

// create a object called Capacity and dog which takes in an empty array.
const CAPACITY = 5;
const dogs = [];

// a function for the header that prints out a message
function writeHeader(message) {
    console.log(`\n${message}`);
    console.log("=".repeat(message.length));
}

// calling the getDog name function that loops over the dog names and if 
// name is empty, return empty name or undefined.
function getDogName() {
    let name;
    do {
        name = prompt("Dog name: ").trim();
    } while (name.length === 0);
    return name;
}
// a function for dropoff where if the dogs are greater than the capacity = 5
// return the string.
function drogoff() {
    writeHeader("Drop-Off");

    if (dogs.length >= CAPACITY) {
        console.log("Sorry, we're at capacity.");
        return;
    }
// we are getting the dog names and looping through the dog names and if
// that dog is already in the system, print out the string.
    let dogName = getDogName();
    while (dogs.some(dog => dog.toLowerCase() === dogName.toLowerCase())) {
        console.log("We already have a dog by that name. Can you add a last name?");
        dogName = getDogName();
    }
    // otherwise, return the dog name and the string "joined the pack".
    dogs.push(dogName);
    console.log(`${dogName} joined the pack.`);
}
// creating the function for pickup and if the dog is empty, print out the string.
function pickup() {
    writeHeader("Pickup");

    if (dogs.length === 0) {
        console.log("Sorry, we don't have your dog.");
        return;
    }
// we are getting the dog names and looping through the dog names and if
// that dog isnt in the system, print out the string.
    let dogName = getDogName();
    const dogIndex = dogs.findIndex(dog => dog.toLowerCase() === dogName.toLowerCase());
    if (dogIndex === -1) {
        console.log(`${dogName} isn't in our pack.`);
        // otherwise, print out "is all checked out."
    } else {
        dogs.splice(dogIndex, 1);
        console.log(`${dogName} is all checked out.`);
    }
}
// create function for displaying dogs. use the ForEach to print out each dog
// in the list that has been stored in the list. 
function displayDogs() {
    writeHeader("Display the Dogs");
    dogs.forEach(dog => console.log(dog));
}

// creating a function that displays the entire main menu to select from.
// and returns the prompt for each action.
function getMainMenuOption() {
    writeHeader("Main Menu");
    console.log("0. Exit");
    console.log("1. Drop-Off");
    console.log("2. Pickup");
    console.log("3. Display the Dogs")
    return prompt("Choose 0–3:");
}

// start function comes after the main manu option was picked. 
// prints out the welcome string.
function start() {
    console.log("Welcome to Doggie Day Care.");
    let option;
    // do continue to loop the main menu. 
    do {
        option = getMainMenuOption();
        // switch statement for the options so when the user picks an option,
        // it'll do the appropriate action.
        switch (option) {
            case "0":
                break;
            case "1":
                drogoff();
                break;
            case "2":
                pickup();
                break;
            case "3":
                displayDogs();
                break
            default:
                console.log("I don't understand that option.");
        }
        // while the option is equal to 0 , it'll print out Goodbye.
    } while (option !== "0");
    console.log("Goodbye.");
}
// starts the application
start();