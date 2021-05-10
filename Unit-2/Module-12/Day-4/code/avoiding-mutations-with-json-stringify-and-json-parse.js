const user = {
    id: 1,
    name: "Leanne Graham",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  }

const newUser = {...user}

newUser.company.name = "Something else!"

console.log(user)

const user = {
    id: 1,
    name: "Leanne Graham",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  }

// `newUser` will no longer affect `user`
const newUser = JSON.parse(JSON.stringify(user))

newUser.company.name = "Something else!"

console.log(user)