document.querySelectorAll("li").forEach((li) => {
  // `li` is a of type `Element` - use `Element.classList`
  li.classList.add("text-info");
});
