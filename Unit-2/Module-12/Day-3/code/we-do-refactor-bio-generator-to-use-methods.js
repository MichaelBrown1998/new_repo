const person = {
    name: "Mark Wellington",
    age: 23,
    hobbies: ["baking", "cooking", "eating"],
  
    // Using simplified ES6 method syntax
    greet() {
      // As in Java, `this` is a reference to this currently scoped object
      return `Hello! My name is ${this.name}`
    },
    getAge() {
      return this.age
    },
    listHobbies() {
      if (!this.hobbies.length) {
      return"Actually, I have no hobbies!"
    } else {
      return this.hobbies.join("\n\t")
    }
    }
  }
  
  console.log(person.greet()); // Hello! My name is Mark Wellington