const studentData = require("../students/index.js");

// TODO:  `return` if the name is longer than the given threshold

function getLongNames(students, threshold = 10) {
  // return students.filter(({ name }) => name.length >= threshold);
  return students.filter(student) => student.name.length >= threshold);
}

module.exports = getLongNames;
