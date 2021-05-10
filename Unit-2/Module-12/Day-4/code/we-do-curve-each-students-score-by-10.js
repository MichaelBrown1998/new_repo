const studentData = require("../students/index.js");

function curveScores(students, curveAmt = 10) {
  return students
    .map
    // TODO: Map over `students`, applying `curveAmt` to each `score`
    ();
}

module.exports = curveScores;

function curveScores(students, curveAmt = 10) {
    return students.map((student) => {
      // Best practice to not directly mutate an incoming parameter
      const ret = { ...student };
      ret.score += curveAmt;
  
      // Be sure to return the entire student object with the updated score!
      return ret;
    });
  }