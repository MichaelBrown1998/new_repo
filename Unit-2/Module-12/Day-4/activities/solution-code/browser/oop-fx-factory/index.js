// const bob = {
//   id: 1134299,
//   username: "bob1998",
//   firstName: "Robert",
//   lastName: "Kazinsky",
//   title: "Associate Developer",

//   intro() {
//     return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`;
//   },

//   updateTitle(newTitle) {
//     this.title = newTitle;
//   },
// };

function createEmployee({
  id,
  username,
  firstName,
  lastName,
  title,
} = {}) {
  return {
    id,
    username,
    firstName,
    lastName,
    title,

  intro() {
    return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`
  },

  updateTitle(newTitle) {
    this.title = newTitle
  }
  };
}

const mark = createEmployee({id: "1134255", username: "mark1977", firstName: "Mark", lastName: "Ruffalo", title: "Associate Developer"})

console.log(mark)