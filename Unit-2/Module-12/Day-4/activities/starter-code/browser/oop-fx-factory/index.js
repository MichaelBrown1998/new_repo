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

function createEmployee({title, username, firstName, id, lastName} = {}) {
  return {
    id,  // same as          id: id
    username, // same as            username: username
    firstName,
    lastName,
    title, // etc...              title: title

    intro() {
      return `My name is ${this.firstName} ${this.lastName}. I am a(n) ${this.title}.`;
    },

    updateTitle(newTitle) {
      this.title = newTitle;
    }
  };
}

const adam = {id: "8675",
              username: "adamc",
              firstName: "Adam",
              lastName: "Caton",
              title: "Senior Director",
              mood: "positive"
            }

const adamTheEmployee = createEmployee(adam);

const adlin = {id: 456,
                login: "adlin4thewin",
                firstName: "Adlin",
                title: "Superboss",
                age: 22
              }

const adlinTheEmployee = createEmployee(adlin)

