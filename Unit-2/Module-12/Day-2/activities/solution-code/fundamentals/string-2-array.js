const tongueTwister =
  "Peter Piper picked a peck of pickled peppers; A peck of pickled peppers Peter Piper picked; If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked?";

// No arguments into `split` result in the same thing as doing [tongueTwister] - simply wraps the string in an Array
console.log(tongueTwister.split());

// Split at every letter
console.log(tongueTwister.split(""));

// Split at every space
console.log(tongueTwister.split(" "));

// Split at every...`P` - Notice that the "P" is not included in the resulting Array
console.log(tongueTwister.split("P"));
