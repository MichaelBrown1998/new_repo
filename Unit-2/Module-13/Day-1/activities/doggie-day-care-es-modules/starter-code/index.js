const prompt = require("prompt-sync")();

const CAPACITY = 5;
const dogs = [];

function writeHeader(message) {
    console.log(`\n${message}`);
    console.log("=".repeat(message.length));
}

function getDogName() {
    let name;
    do {
        name = prompt("Dog name: ").trim();
    } while (name.length === 0);
    return name;
}

function drogoff() {
    writeHeader("Drop-Off");

    if (dogs.length >= CAPACITY) {
        console.log("Sorry, we're at capacity.");
        return;
    }

    let dogName = getDogName();
    while (dogs.some(dog => dog.toLowerCase() === dogName.toLowerCase())) {
        console.log("We already have a dog by that name. Can you add a last name?");
        dogName = getDogName();
    }
    dogs.push(dogName);
    console.log(`${dogName} joined the pack.`);
}

function pickup() {
    writeHeader("Pickup");

    if (dogs.length === 0) {
        console.log("Sorry, we don't have your dog.");
        return;
    }

    let dogName = getDogName();
    const dogIndex = dogs.findIndex(dog => dog.toLowerCase() === dogName.toLowerCase());
    if (dogIndex === -1) {
        console.log(`${dogName} isn't in our pack.`);
    } else {
        dogs.splice(dogIndex, 1);
        console.log(`${dogName} is all checked out.`);
    }
}

function displayDogs() {
    writeHeader("Display the Dogs");
    dogs.forEach(dog => console.log(dog));
}

function getMainMenuOption() {
    writeHeader("Main Menu");
    console.log("0. Exit");
    console.log("1. Drop-Off");
    console.log("2. Pickup");
    console.log("3. Display the Dogs")
    return prompt("Choose 0–3:");
}

function start() {
    console.log("Welcome to Doggie Day Care.");
    let option;
    do {
        option = getMainMenuOption();
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
                break;
            default:
                console.log("I don't understand that option.");
        }
    } while (option !== "0");
    console.log("Goodbye.");
}

start();