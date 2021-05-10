const vehicles = [
  "Ford",
  "Chevy",
  "Tesla",
  "Benz",
  "Toyota",
  "Mazda",
  "Chrysler",
  "Airplane",
];

// Get the first 3 vehicles
const [car1, car2, car3] = vehicles;

// 'vehicles' does not mutate
console.log(car1, car2, car3, vehicles);
