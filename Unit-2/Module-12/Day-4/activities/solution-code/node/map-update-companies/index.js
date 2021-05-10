const usersData = require("../users/index.js");

function updateCompanyNames(
  users,
  newCompanyName = "The Umbrella Corporation"
) {
  return users.map((user) => {
    // Avoid mutations with nested objects
    const ret = JSON.parse(JSON.stringify(user));
    ret.company.name = newCompanyName;
    return ret;
  });
}

module.exports = updateCompanyNames;
