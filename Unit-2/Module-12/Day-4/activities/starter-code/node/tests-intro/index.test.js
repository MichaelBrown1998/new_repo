const addTwoNums = require("./index");

test("1 + 2 = 3", () => {
  expect(addTwoNums(1, 2)).toBe(3);
});
