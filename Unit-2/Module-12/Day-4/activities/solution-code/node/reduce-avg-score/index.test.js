const calcStuAvg = require("./index.js");
const studentData = require("../students/index.js");

test("average should be 72.6", () => {
  expect(calcStuAvg(studentData)).toBe(72.6);
});
