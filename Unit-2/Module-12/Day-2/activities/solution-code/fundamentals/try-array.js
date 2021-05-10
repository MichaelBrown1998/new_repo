const vehicles = [
  "Ford",
  "Chevy",
  "Tesla",
  "Benz",
  "Toyota",
  "Mazda",
  "Chrysler",
  "Ford",
  "Airplane",
];

// Why do we see the `9` as the output?
console.log(vehicles.push("bike"));

// Did vehicles mutate?
console.log(vehicles);

// What's the output? Why?
console.log(vehicles.pop());

// Did vehicles mutate?
console.log(vehicles);

// What's the output? Why?
console.log(vehicles.shift());

// Did vehicles mutate?
console.log(vehicles);

// Why do we see the `10` as the output?
console.log(vehicles.unshift("bike"));

// Did vehicles mutate?
console.log(vehicles);

vehicles.reverse();

// Did vehicles mutate?
console.log(vehicles);

// How can we get 3 of the elements starting at the 3th one?
vehicles.slice(3, 6);

// Did vehicles mutate?
console.log(vehicles);

// Use `concat` to add "train"
vehicles.concat("train");

// Did vehicles mutate?
console.log(vehicles);

// Does `vehicles` include a "Ford"?
vehicles.includes("Ford");

// At what index might we find a "Toyota"
vehicles.indexOf("Toyota");

// What's the last index where we find "Ford?"
vehicles.lastIndexOf("Ford");
