/**
 * TODO: Create an `Employee` constructor fxn.
 * Keep your code above line 8, because
 * the function should exist before we invoke it with `new`
 *
 */

function Employee({title, username, id, firstName, lastName} = {}) {
  this.id = id;
  this.username = username;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

Employee.prototype.intro = function() {
  return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`
}

Employee.prototype.updateTitle = function(newTitle) {
  this.title = newTitle;
}

const bob = new Employee({
  id: 1134299,
  username: "bob1998",
  firstName: "Robert",
  lastName: "Kazinsky",
  title: "Associate Developer",
});

console.log(bob, bob.intro());
