function Employee({
    id,
    username,
    firstName,
    lastName,
    title,
  } = {}) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }
  
  // These prototypal methods are used by an object that IS A(n) `Employee`.
  Employee.prototype.intro = function() {
    return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`
  }
  
  Employee.prototype.updateTitle = function (newTitle) {
    this.title = newTitle;
  };
  
  const bob = new Employee({
    id: 1134299,
    username: "bob1998",
    firstName: "Robert",
    lastName: "Kazinsky",
    title: "Associate Developer",
  });
  
  console.log(bob, bob.intro());