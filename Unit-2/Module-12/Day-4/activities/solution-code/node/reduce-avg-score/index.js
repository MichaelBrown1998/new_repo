const studentData = require("../students/index.js");

function calcStuAvg(students) {
  return (
    students.reduce((total, { score }) => (total += score), 0) / students.length
  );
}

module.exports = calcStuAvg;
