const person = {
  firstName: "Mark",
  lastName: "Ellington",
  hobbies: ["football", "baseball", "basketball"]
};

function generateBio({firstName, lastName, homeTown = "New York", age = 18, hobbies } = {}) {
  if (!firstName || !lastName || !hobbies) {
    return "Not enough info!"
  }
  return `
    Hello, my name is ${firstName} ${lastName}.
    I am ${age} years old and come from ${homeTown}.
    Here are my hobbies:
    ${listHobbies(hobbies)}
  `
}

function listHobbies(hobbies = []) {
  let ret = ""

  if (!hobbies.length) {
    ret = "Actually, I have no hobbies!"
  } else {
    ret = hobbies.join("\n\t")
  }

  return ret
 }