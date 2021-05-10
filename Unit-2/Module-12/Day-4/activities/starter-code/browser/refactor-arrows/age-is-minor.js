const person = {
  name: "Alice",
  age: 17
}

// function checkIsMinor({age}, adultAge = 18) {
//   return age < adultAge ? true : false;
// }

// Full arrow function without any bonus syntax
// const checkIsMinor = ({age}, adultAge = 18) => {
//   return age < adultAge ? true : false;
// }

// If the function contains only one line, the result of that line is returned
// if we don't use the curly brackets
const checkIsMinor = ({age}, adultAge = 18) => age < adultAge ? true : false;

person.isMinor = checkIsMinor(person, 19)

console.log(person);

// If we only have one parameter, the parenteses are optional
const tripleTheInput = x => x*3;

// const tripleTheInput = (x) => {return x*3}

console.log(tripleTheInput(8));