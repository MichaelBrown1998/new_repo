const usersData = require("../users/index.js");

function updateCompanyNames(
  users,
  newCompanyName = "The Umbrella Corporation"
) {
  return users.map(
    // TODO: Update `company.name` to `newCompanyName` WITHOUT mutating the original data
    (user) => {
      // the below makes a "deep copy" of the user object by turning into
      // a string, and then turning it back into a javascript object
      const newUser = JSON.parse(JSON.stringify(user));
      newUser.company.name = newCompanyName;
      return newUser;
    }
  );
}

module.exports = updateCompanyNames;
