const curveScores = require("./index");

test("score curved by 10", () => {
  expect(
    curveScores([{ name: "Adah Leffler", score: 75, id: 1695843 }], 10)[0].score
  ).toBe(85);
});
