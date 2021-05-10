const tallyWebsiteTlds = require("./index.js");
const usersData = require("../users/index.js");

test("The tally should match!", () => {
  expect(tallyWebsiteTlds(usersData)).toMatchObject({
    ".org": 2,
    ".net": 2,
    ".info": 2,
    ".biz": 1,
    ".io": 1,
    ".com": 2,
  });
});
