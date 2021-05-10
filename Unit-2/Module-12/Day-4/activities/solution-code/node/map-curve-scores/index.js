const studentData = require("../students/index.js");

const curveScores = (students, amt) =>
  students.map((student) => ({ ...student, score: student.score + 10 }));

module.exports = curveScores;
