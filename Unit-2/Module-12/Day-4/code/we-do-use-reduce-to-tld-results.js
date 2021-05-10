const usersData = require("../users/index.js");

function tallyWebsiteTlds(users) {
  return users
    .reduce
    // TODO: Create a tally object that lists each TLD and how many times they were used with a `user.website`
    ();
}

module.exports = getWebsitesWithTld;

function tallyWebsiteTlds(users) {
    return users.reduce(
      (tally, { website }) => {
        // The TLD is from the last `"."` to the end of `.website`
        const tld = website.slice(website.lastIndexOf("."), website.length);
  
        // Check if the object has the `tld` as a key
        // MUST use bracket notation to use the value of tld (and not `tld`)
        if (tally[tld]) {
          // If the key exists, add 1 to its value
          tally[tld] = tally[tld] + 1;
          return tally;
        }
        // Otherwise, initialize a new key for this `tld`
        tally[tld] = 1;
        return tally;
      },
  
      // MUST initialize accumulator to make it an object
      {}
    );
  }

  function tallyWebsiteTlds(users) {
    return users.reduce(
      (tally, { website }) => {
        // The TLD is from the last `"."` to the end of `.website`
        const tld = website.slice(website.lastIndexOf("."), website.length);
  
        // Check if the object has the `tld` as a key
        // MUST use bracket notation to use the value of tld (and not `tld`)
        tally[tld] = tally[tld] ? tally[tld] + 1 : 1;
        return tally;
      },
  
      // MUST initialize accumulator to make it an object
      {}
    );
  }