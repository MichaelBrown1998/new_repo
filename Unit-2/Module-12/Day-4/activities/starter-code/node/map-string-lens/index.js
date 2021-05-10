// Common JS module import
const studentData = require("../students/index.js");

function getAllNameLengths(students) {
  return students.map(
    /**
     * Write your code inside of this function.
     * TODO: `map` over the incoming students
     * TODO: `return` the length of their name
     */
    (student) => student.name.length
  );
  // TODO: Add a return to this function
}

console.log(
  getAllNameLengths([
    { name: "Daniele", room: "dark", dogs: true },
    { name: "Fred", background: "club", primaryColor: "violet" },
    { name: "Zaki", camera: "off", lunch: "something amazing" },
  ])
);

// Common JS module export
module.exports = getAllNameLengths;
