const addTwoNums = require("./index");

test("1 + 1 = 2", () => {
  expect(addTwoNums(1, 2)).toBe(3);
});
