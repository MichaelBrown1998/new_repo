for (let index = 0; index < 100; index++) {
  // If the number is divisible by 3 AND 5, log 'FIZZBUZZ'
  if (!(index % 3) && !(index % 5)) {
    console.log("FizzBuzz!");
    //  If the number is divisible by 3, log 'FIZZ'
  } else if (!(index % 3)) {
    console.log("Fizz!");
    // If the number is divisible by 5, log 'BUZZ'
  } else if (!(index % 5)) {
    console.log("Buzz!");
    // Otherwise, just log the number.
  } else {
    console.log(index);
  }
}
