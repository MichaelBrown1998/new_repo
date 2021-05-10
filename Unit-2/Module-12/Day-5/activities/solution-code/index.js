// importing different javascript pages to the index.
import Table from "./components/Table.js";
import Form from "./components/Form.js";
import api from "./api/index.js";

// creating a constant called root to select the query "root"
// from the index.html.
const root = document.querySelector("#root");

// create constant called state to sort and store data with 
// the properities Id, name.
const state = {
  data: [],
  dataSorting: {
    id: "bi-sort-alpha-down",
    name: "bi-sort-alpha-down",
  },
};
// render : update
function render() {
  // If there are any users, render the table, else...
  root.innerHTML = state.data.length
  // if there is nothing inside of the "data" array
    ? `
  ${Table(state)}
  ${Form()}
  `
  // this is what is returned when there's no data in the table.
    : `<p>No users to display!</p>`;

    // creating a event listener in our form called submit.
  root.querySelector("form")?.addEventListener("submit", (event) => {
    // if the default event doesnt go through, cancel the event.
    event.preventDefault();

    // creating a newUser object.
    const newUser = {
      ...Object.fromEntries(new FormData(event.target)),
      ...{ id: state.data.length + 1 },
    };
    // created new User gets stored in the API. Refeshes the API so
    // the new user is avaiable.
    api.create(newUser).then(() => {
      state.data = [...state.data, newUser];
      render();
    });
  });

  root.querySelectorAll(".btn-danger").forEach((button) => {
    button.addEventListener("click", function () {
      /**
       * 1. Find the CLOSEST PARENT of THIS CLICKED BUTTON that is a `<tr>`
       * 2. Get that CLOSEST PARENT'S first found `<td>`
       * 3. The `innerText` of this `<td>` is the `id4Deletion`
       */
      const id4Deletion = this.closest("tr").querySelector("td").innerText;
      api.delete(id4Deletion).then(() => {
        // Filter out all elements that DON'T match `id4Deletion`
        // Make sure that `id4Deletion` is a number when comparing
        state.data = state.data.filter(({ id }) => id !== Number(id4Deletion));
        // Re-render!
        render();
      });
    });
  });

  /**
   * Grab any `input`s inside of `table` - these are the 'editable fields.'
   */
  root.querySelectorAll("table input").forEach((input) => {
    // Listen for any change to the input
    input.addEventListener("change", function () {
      // Get the `data-key` value from THIS CHANGED input
      const key4Update = this.dataset.key;

      // Get the value of THIS CHANGED input
      const value4Update = this.value;

      const id4Update = this.closest("tr").querySelector("td").innerText;

      api
        .update(
          // MUST use BRACKET NOTATION
          // Otherwise, key will be: "key4Update" (as a string)
          { [key4Update]: value4Update },
          id4Update
        )
        .then(() => {
          // `find` is similar to filter but returns the first found object
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
          const user2Update = state.data.find(
            ({ id }) => id === Number(id4Update)
          );

          // Create a new user object in a non-mutating way using spread
          const updatedUser = {
            ...user2Update,
            ...{ [key4Update]: value4Update },
          };

          /**
           * 1. Filter out all the users that are NOT the one we want to update
           * 2. Add `updatedUser` in a non-mutating fashion using spread
           * 3. Sort the resulting array
           *
           * `sort` works such that we iterate over the elements 2 at a time.
           * We simply sort them all the way through based upon their `id`s.
           */
          state.data = [
            ...state.data.filter(({ id }) => id !== Number(id4Update)),
            updatedUser,
          ].sort((currentItem, nextItem) => currentItem.id > nextItem.id);

          render();
        });
    });
  });

  root.querySelectorAll("table i").forEach((icon) => {
    icon.addEventListener("click", function () {
      const key4Sorting = this.dataset.key;
      state.dataSorting[key4Sorting] = state.dataSorting[key4Sorting].endsWith(
        "down"
      )
        ? "bi-sort-alpha-up"
        : "bi-sort-alpha-down";

      state.data = state.data.sort((currentItem, nextItem) =>
        state.dataSorting[key4Sorting].endsWith("down")
          ? currentItem[key4Sorting] > nextItem[key4Sorting]
          : currentItem[key4Sorting] < nextItem[key4Sorting]
      );

      render();
    });
  });
}

(async () => {
  state.data = await api.index();
  console.log(state.data);
  render();
})();

render();
