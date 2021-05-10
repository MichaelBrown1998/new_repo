document.querySelector("button").addEventListener("click", function () {
  console.log(`Hello, world! ${this} just got clicked!`);
});

document.querySelector("input").addEventListener(
  "keydown",

  // `event` is just a parameter name - could be anything!
  function (event) {
    if (this.value.length > 10 && event.key !== "Backspace") {
      event.preventDefault();
    }
  }
);
