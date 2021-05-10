// TODO: Update each`<li>` so that it has the class: `text-info`.

// document.querySelectorAll selects all matches
// document.querySelector returns just the first match
const cookieListItems = document.querySelectorAll(".list-group-item");

console.log(cookieListItems);

cookieListItems.forEach(cli => {
  cli.classList.add("text-info")
})
