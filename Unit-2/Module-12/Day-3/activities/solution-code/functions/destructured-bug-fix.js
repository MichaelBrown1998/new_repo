const person = {}

function reverseLowerCaseName({name}) {
  return name ? name.toLowerCase().split().reverse().join() : "Invalid name!"
}

console.log(reverseLowerCaseName(person))
