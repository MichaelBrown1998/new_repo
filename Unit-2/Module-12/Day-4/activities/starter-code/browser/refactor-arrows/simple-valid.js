const fd = {
  username: "marco1254",
  firstName: "Marco",
  lastName: "Polo",
  email: "",
  msg: "How can I get to China?"
}
// function checkLen({str, minLen = 0, maxLen} = {}) {
//   return str.length >= minLen && str.length <= maxLen;
// }

const checkLen = ({str, minLen = 0, maxLen} = {}) =>
  str.length >= minLen && str.length <= maxLen;


const validateForm = ({username, firstName, lastName, email, msg} = {}) => {
  if (!checkLen({str: username, minLen: 6, maxLen: 10})) {
    return "Invalid username";
  }

  if (!firstName || !lastName || !email.includes("@")) {
    return "Something's not here!"
  }

  if (!checkLen({str: msg, minLen: 50, maxLen: 250})) {
    return "Invalid message!"
  }
  return "everything checks out";
}

const returnMessage = validateForm(fd)
console.log(returnMessage)

