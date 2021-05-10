document.querySelectorAll("section p:first-of-type").forEach((p) => {
    // `li` is a of type `Element` - use `Element.classList`
    p.classList.add("lead");
  });
  
  document.querySelectorAll("p").forEach((p) => {
    p.addEventListener("mouseover", function () {
      this.classList.add("bg-info");
    });
  
    p.addEventListener("mouseout", function () {
      this.classList.remove("bg-info");
    });
  });