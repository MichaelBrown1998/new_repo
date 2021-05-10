const bob = {
    id: 1134299,
    username: "bob1998",
    firstName: "Robert",
    lastName: "Kazinsky",
    title: "Associate Developer",
  
    intro() {
      return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`
    },
  
    updateTitle(newTitle) {
      this.title = newTitle
    }
  }