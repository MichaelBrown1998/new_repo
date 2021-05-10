const nums = [5, 8, 8, 2, 3, 0];

// return an array such that each numbers is 2 times and plus six the number in the original array
const changedNums = nums.map(num => { return {name:"Dan", number: num*2 + 6}})

console.log("original", nums)
console.log("mapped", changedNums);


const dan = {name:"Dan", age:43};
const steve = {name: "Steve", age: 46};
const mel = {name: "Mel", age:90};
const jillian = {name: "Jill", age: 50};
const irene = {name: "Irene", age: 100};
const bart = {name: "Bartholomew", age: 9};

const people = [dan, steve, mel, jillian, irene, bart];

// just get people over 49 years old
const aarpPeople = people.filter(person => person.age >= 50);

console.log("HEre are all the people", people);
console.log("The AARP people", aarpPeople);

// just get the names of the people over 49 years old
const oldieNames = people.filter(person => person.age >= 50).map(person => person.name);
console.log("oldieNames", oldieNames);
aarpPeople[0].name = "Mel Brooks";
console.log(people);

const moreNumbers = [20, 50, 80, 100, 500, 1]; // should sum to 751
// get the sum of all the numbers
const sum = moreNumbers.reduce((total, num) => total + num);

console.log("the reduction of those numbers is " + sum);
// 20 - 50 - 80 - 100 ...

const stringsToJoin = ["do", "re", "mi", "fa", "sol", "la", "ti", "do"];
// concatenate all the strings, with a ' *** ' delimiter, starting with the string "The SCALE: "
const theScale = stringsToJoin.reduce(
  (soFar, nextOne) => soFar + " *** " + nextOne, "The SCALE: "
  );
console.log(theScale);