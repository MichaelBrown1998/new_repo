# Add Bootstrap

Our goal is to add CSS in four different ways:

1. Import a custom stylesheet.
2. Import a custom CSS module.
3. Import Bootstrap directly.
4. Use React Bootstrap components.

## Setup

Open the `starter-code` directory (a CRA application) with VS Code.

Install dependencies with `npm install`.

Install both Bootstrap and React Bootstrap. React Bootstrap requires Bootstrap, but we can use Bootstrap independently.

```sh
> npm install react-bootstrap bootstrap
```

Start it with `npm start`.

Complete the tasks below.

## Tasks

Work through the tasks in order. Don't jump ahead.

For each task, confirm your result in the browser before proceeding.

1. Update `App.js` to include the `Library` component only.

2. Add CSS to `App.js`.

    - Create a CSS file named `App.css`.
    - Add CSS rules: change the default body font, create a class that adds a border around an element.
    - Import `App.css` in `App.js`.
    - Confirm the body font changed in the browser.

3. Update `Library.js`.

    - Put a border around the entire `Library` by adding the border class. There's no need to import the CSS in the `Library` because it was already loaded in `App.js`.

4. Add a CSS module.

    - Create a CSS file named `Library.module.css`.
    - Add a class that changes the `Library` header to a different color.
    - Import `Library.module.css` with the `import styles from...` syntax.
    - Use `styles` to set the `Library` header class.

5. Add Bootstrap.

    - Import Bootstrap directly in `App.js`.
    - Update `Library.js` so it's contained within a `div.container` (div with a container class). If you have an existing `div`, use it.

6. Move the stylesheets.

    - Move `App.css` and `Library.module.css` to a directory named `src/css`.
    - Update the import paths, and confirm everything is working.

7. Use React Bootstrap.

    - In `Library`, import the `CardColumns` component from `react-bootstrap`. Wrap all books in a `CardColumns` component so they lay out side-by-side.
    - In `Book`, import at least a `Card` and `Button` from `react-bootstrap`. Import other components as required to make the `Book` look decent.
    - Turn the `Book` into a `Card`.
    - The Like button should be a primary button. The Delete button should be a danger button.

8. Give the `Book` cards a very light blue background in whatever way you choose.

9. Challenge: Add an overlay/popover to a component. See the [React Bootstrap Overlay docs](https://react-bootstrap.github.io/components/overlays/).