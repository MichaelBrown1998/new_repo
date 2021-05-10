const person = {
  name: "John"
}

/**
 * Our fxn. expects to be passed in an object literal that includes a property `name`.
 * It will immediately destructure that value - no need for any dot notation for that part.
 */
function reverseLowerCaseName({name}) {
  /**
   * 1. Turn the name into all lower case - `toLowerCase().
   * 2. Split the string name into an array - name.split()
   * 3. Reverse this array - reverse()
   * 4. Join the result back into a string - join()
   */
  return name.toLowerCase().split().reverse().join();
}

console.log(reverseLowerCaseName(person))