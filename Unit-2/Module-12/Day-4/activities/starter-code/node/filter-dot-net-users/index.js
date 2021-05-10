const usersData = require("../users/index.js");

function getWebsitesWithTLD(users, tld = ".net") {
  // TODO: Write the filter's predicate callback fn. such that we only get users that have websites that end with TLD
  return users.filter(({ website }) => website.endsWith(tld));
}

module.exports = getWebsitesWithTLD;
