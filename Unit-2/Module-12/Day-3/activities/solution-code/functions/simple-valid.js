const fd = {
  username: "marco1254",
  firstName: "Marco",
  lastName: "Polo",
  email: "",
  msg: "How can I get to China?"
}

function checkLen({str, minLen = 0, maxLen} = {}) {
  return str.length >= minLen && str.length <= maxLen;
}

function validateForm({username, firstName, lastName, email, msg} = {}) {
  if (!checkLen({str: username, minLen: 6, maxLen: 10})) {
    return "Invalid username";
  }

  if (!firstName || !lastName || !email.includes("@")) {
    return "Something's missing!"
  }

  if (!checkLen({str: msg, minLen: 50, maxLen: 250})) {
    return "Invalid message!"
  }
}

validateForm(fd)