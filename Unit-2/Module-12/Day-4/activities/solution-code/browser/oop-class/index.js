// TODO: Re-create the Employee Constructor Function with `class`
class Employee {
  constructor({ id, username, firstName, lastName, title } = {}) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }

  // These methods are added to `Employee.prototype` for use by any object that IS A(n) `Employee`
  intro() {
    return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }
}

// Instantiation syntax remains the same
const bob = new Employee({
  id: 1134299,
  username: "bob1998",
  firstName: "Robert",
  lastName: "Kazinsky",
  title: "Associate Developer",
});

console.log(bob, bob.intro());
