const person = {}

const reverseLowerCaseName = ({name}) => name ? name.toLowerCase().split().reverse().join() : "Invalid name!"

console.log(reverseLowerCaseName(person))
