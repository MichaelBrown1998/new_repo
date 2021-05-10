// TODO: Re-create the Employee Constructor Function with `class`
class Employee {
  constructor({title, username, id, firstName, lastName} = {}) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }

  intro() {
    return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }
}

// Instantiation syntax remains the same
const bob = new Employee({
  id: 1134299,
  username: "bob1991",
  firstName: "Robert",
  lastName: "RaDinsky",
  title: "Associate Developer",
});

console.log(bob, bob.intro());
