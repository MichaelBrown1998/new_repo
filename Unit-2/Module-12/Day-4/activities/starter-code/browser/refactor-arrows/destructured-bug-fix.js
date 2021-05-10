const person = {
  name: "Danimal"
}

const reverseLowerCaseName = ({name}) =>
  // name ? name.toLowerCase().split("").reverse().join("") : "Invalid name!";

   name ? "Valid name" : "Invalid name!";

console.log(reverseLowerCaseName(person));


const number = person.surname === "Daniele" ? 100 : 0;
console.log(number);

const myLuckyNumber = 4;



const word = myLuckyNumber === 9 ? "Hooray" : "Booooo";
console.log (word);
