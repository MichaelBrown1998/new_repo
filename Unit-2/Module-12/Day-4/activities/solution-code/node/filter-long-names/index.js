const studentData = require("../students/index.js");

function getLongNames(students, threshold = 10) {
  return students.filter(({ name }) => name.length >= threshold);
}

module.exports = getLongNames;
