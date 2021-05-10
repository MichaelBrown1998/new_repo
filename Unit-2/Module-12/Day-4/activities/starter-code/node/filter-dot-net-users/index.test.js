const getWebsitesWithTld = require("./index.js");
const userData = require("../users/index.js");

const dotNetUsers = getWebsitesWithTld(userData);

test("first item's website should end with '.net'", () => {
  expect(dotNetUsers[0].website.endsWith(".net")).toBeTruthy();
});

test("2 remaining items after the filter is applied", () => {
  expect(dotNetUsers.length).toBe(2);
});
