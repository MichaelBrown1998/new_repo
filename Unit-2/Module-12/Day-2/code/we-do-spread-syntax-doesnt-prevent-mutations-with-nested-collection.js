const worker1 = {
    "id": 113299,
    "name": "Leanne Rimes",
    "company": {
      "name": "Wal-Mart"
    }
  }

// Attempt to use SPREAD OPERATOR to make `worker1Dup` a separate REFERENCE from `worker1` - but with the same data
const worker1Dup = {...worker1};

// Updating primitive data like `name`? No worries - COPIES are separate
worker1Dup.name = "John Rimes"

console.log(worker1Dup, worker1);

/**
 * Attempt to change `company.name`? That's a problem b/c those nested objects still maintain the same memory references
 * In other words, using `...` does not recursively update all references with nested collections!
 */
worker1Dup.company.name = "Amazon"

// Both `John` and `Leanne` work for `Amazon`!
console.log(worker1Dup, worker1)

/**
 * Solution: 1. Recall that JSON is a universal text format that closely resembles JS Objects!
 * 2. Use `JSON.stringify()` to turn a JS Object into a bona fide primitive string - thereby breaking any/all previous REFERENCES recursively.
 * 3. Turn that 'stringified object' back into a bona fide JS object literal collection with: `JSON.parse()`.
 */
const worker1NonMutatingDup = JSON.parse(JSON.stringify(worker1))

worker1NonMutatingDup.company.name = "Enterprise"

// This time `worker1` was not affected at all (although `company.name` still shows as `Amazon` from the earlier mutation in this example).
console.log(worker1NonMutatingDup, worker1)