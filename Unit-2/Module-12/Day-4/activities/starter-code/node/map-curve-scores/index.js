const studentData = require("../students/index.js");

function curveScores(students, curveAmt = 10) {
  return students.map(
    function(student) {
      return
        {
          name: student.name,
          id: student.id,
          score: student.score + curveAmt};
        }
  );
}

function getAllScores(students) {
  students.map(
    function(student) {
      return student.score;
    }
  )
}

function getAllScores(students) {
  students.map(student => student.score)
}



const result = curveScores(
  [{ name: "Adah Leffler", score: 75, id: 1695843 }],
  10
);

console.log(result);

module.exports = curveScores;
