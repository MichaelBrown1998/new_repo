const person = {
  name: "Alicia",
  age: 17
}

const checkIsMinor = ({age}, adultAge = 18) => age < adultAge ? true : false

person.isMinor = checkIsMinor(person)

console.log(person)