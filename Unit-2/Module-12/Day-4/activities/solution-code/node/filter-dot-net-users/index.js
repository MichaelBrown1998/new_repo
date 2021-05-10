const usersData = require("../users/index.js");

function getWebsitesWithTld(users, tld = ".net") {
  return users.filter(({ website }) => website.endsWith(tld));
}

module.exports = getWebsitesWithTld;
