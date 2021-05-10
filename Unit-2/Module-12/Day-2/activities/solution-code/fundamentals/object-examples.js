// I am an nothing but an empty object
const me = {}

/**
 * Objects use dot notation to set and get properties - like Java.
 */

// Maybe I should have a name
me.name = "John";

/**
 * Object use string indices.
 * We don't need to use quotations when we use dot notation.
 * We do still need the quotations around the values to specify that they are strings.
 * Values in objects can be ANY data type.
 */

// Maybe an age
me.age = 23;

// Maybe some more stuff
me.hobbies = ["Collecting WW2 Shrapnel", "Football", "Hockey"]

// How about an array of objects? This is very common for 'real' data!
me.family = [
  {name: "Julia", title: "wife"},
  {name: "Philbert", title: "pet", type: "cat"}
]

console.log(me)

// Oh no! I got a divorce but got a new dog!
// We will mutate the object
// Notice the use of chaining from dot notation for `family` to a numerical index in our array and back to a dot notation for `title`
me.family[0].title = "Ex-Wife"

// We can use destructuring to practice a non-mutating pattern (even though we are still mutating in this case b/c we reassign back to `me.family`).
me.family = [...me.family, {name: "Guillermo", title: "pet", type: "dog"}]

// Remember destructuring?
const {name, age} = me;

console.log(name, age);

/**
 * How about using the spread operator to avoid mutation?
 * Again, spreading the values creates separate references for `newMe` and `me`.
 * Changes to 1 won't affect the other...for the most part...
 * We will have a separate lesson on data in JS with regard to copy/value vs references!
 */

const newMe = {...me}

// `newMe` has a new `name`
newMe.name = "Luke";

console.log(me, newMe)