const studentData = require("../students/index.js");

function getAllNameLengths(students) {
  return students.map(({ name }) => name.length);
}

module.exports = getAllNameLengths;
