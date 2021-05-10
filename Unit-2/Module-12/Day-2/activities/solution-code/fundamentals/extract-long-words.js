const tongueTwister =
  "Peter Piper picked a peck of pickled peppers; A peck of pickled peppers Peter Piper picked; If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked?";

const tongueTwisterArray = tongueTwister.split(" ");

for (let i = 0; i < tongueTwisterArray.length; i++) {
  if (tongueTwisterArray[i].length > 5) {
    console.log(tongueTwisterArray[i]);
  }
}
