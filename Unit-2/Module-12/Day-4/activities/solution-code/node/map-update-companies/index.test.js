const updateCompanyNames = require("./index.js");
const userData = require("../users/index.js");

const firstOriginalCompanyName = userData[0].company.name;
const updatedCompanyNames = updateCompanyNames(userData);

test("Original company name of first user to be unchanged", () => {
  expect(userData[0].company.name).toBe(firstOriginalCompanyName);
});

test("should have a user object as first item", () => {
  expect(Object.keys(updatedCompanyNames[0])).toEqual(Object.keys(userData[0]));
});

test("first user should have updated company name to 'The Umbrella Corporation'", () => {
  expect(updatedCompanyNames[0].company.name).toBe("The Umbrella Corporation");
});

test("New array to have same length as original", () => {
  expect(updatedCompanyNames.length).toBe(userData.length);
});
