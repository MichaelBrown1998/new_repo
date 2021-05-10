const getLongNames = require("./index.js");
const studentData = require("../students/index.js");

const longNames = getLongNames(studentData);

test("first item's name should have a length greater than or equal to 12", () => {
  expect(longNames[0].name.length).toBeGreaterThanOrEqual(12);
});

test("48 remaining items after the filter is applied", () => {
  expect(longNames.length).toBe(48);
});
