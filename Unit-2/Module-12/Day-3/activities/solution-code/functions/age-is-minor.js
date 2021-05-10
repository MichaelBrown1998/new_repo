const person = {
  name: "Alicia",
  age: 17
}

function checkIsMinor({age}, adultAge = 18) {
  return age < adultAge ? true : false;
}

person.isMinor = checkIsMinor(person)