# Components, JSX, and Props

Create a new React application and add components that use JSX and props, as described in the following instructions.

## Setup

1. Create a new React application named `libraries` with Create React App.
2. Open `libraries` with VS Code.
3. Start it with `npm start`.

## Tasks

Work through the following tasks in order. Don't jump ahead.

For each task, confirm your result in the browser before proceeding.

1. Create a component named `Book`. Put your favorite book's title in an `h3` and a short description in a `p`. The `h3` and `p` should be enclosed in a `div`, because JSX requires a single parent.

2. Update `App.js`.

    - Import `Book` in `App.js`.
    - Update `App.js` to render your `Book`.

3. Add three `Book`s to `App.js`.

4. Modify `Book` to receive its title and description via props.

5. Update `App.js` to send three different titles and descriptions as props to the respective `Book`s.

6. Destructure props in `Book` if you haven't done so already.

7. Create a component named `Library`. A `Library` is `<h2>Library</h2>` followed by three `Book`s.

    - Import `Book` in `Library.js`.
    - Update `Library.js` to set three different titles and descriptions as props to the three `Book`s. (You could copy and paste these from `App.js`.)

8. Update `App.js`.

    - Remove all `Book`s and their import.
    - Import `Library`.
    - Add a `Library` to the JSX.

9. Update `Library`. Add the following two variables:

    - `name`: A string that is rendered in the `h2`. This is the name of the library.
    - `books`: An array that looks something like the following:
        
        ```js
        const books = [ 
            { title: "The Fifth Season", description: "Setting: the Stillness"}, 
            { title: "The Obelisk Gate", description: "Essun and Nassun"}, 
            { title: "The Stone Sky", description: "Corepoint: a city on the other side of the world"}
        ];
        ```
    - Use the book array to dynamically render `Book`s with `Array.map`.

10. Update `Library` to receive its `name` and `books` via props.

11. Update `App.js`: pass the `Library`'s `name` and `books` as props.
    
12. Update `App.js`: add another `Library` and pass its `name` and `books`.

## Stretch Goals

- Add inline styles to make your library look nice.
- Display books in a `table` or `ul`.