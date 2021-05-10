// function createPerson(name, years) {
//   return {name: name, years: years}
// }

// This does the same thing! Notice
//      {name: name, years: years}
// became
//      {name, years}
const createPerson = (name, years) => ({name, years})

const sam = createPerson("Sam", 27);

const kendall = createPerson("Kendall", 28);

const anotherPerson = createPerson("Ann", 25);

console.log(sam, kendall, anotherPerson);
