const customerChoice = "Combo #3";
const customerName = "Fred";
let price = 0;

switch (customerChoice) {
  case "Combo #1":
    price = 2.99;
    break;
  case "Combo #2":
    price = 2.99;
    break;
  case "Combo #3":
    price = 2.99;
    break;
  default:
    console.error("Invalid Order!");
}

console.log(
  price
    ? `Hello, ${customerName}! Thank you for selecting ${customerChoice}. Your order total is: ${price}`
    : "No valid order placed!"
);
