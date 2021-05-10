const usersData = require("../users/index.js");

function tallyWebsiteTlds(users) {
  return users
    .reduce
    // TODO: Create a tally object that lists each TLD and how many times they were used with a `user.website`
    ();
}

module.exports = getWebsitesWithTld;
