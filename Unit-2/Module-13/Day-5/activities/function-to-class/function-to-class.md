# Rewrite a Functional Component as a Class

## Setup

1. Open `starter-code` with VS Code.

2. Install dependencies with `npm install`.

3. Start interactive development with `npm start`.

## Tasks

The tasks are in priority order. Your instructor may stop you before you're finished.

1. Create a subdirectory in `src` named `classes`. This is where you'll create new class-based components.

2. Create a new class-based component named `Book` in the `classes` directory. Base it on the existing `src/Book` component.

3. Import the class-based `Book` in `src/Library`. The versions should be completely compatible.

4. Confirm that everything works as intended before proceeding.

5. Create a new class-based component named `Library` in the `classes` directory. Base it on the existing `src/Library` component. Import the class-based `Book`, but the functional `BookForm` (`src/BookForm`). The versions should be completely compatible.

6. Import the class-based `Library` in `src/App.js`.

7. Confirm that everything works as intended before proceeding.

8. Create a new class-based component named `BookForm` in the `classes` directory. Base it on the existing `src/BookForm` component.

9. Import the class-based `BookForm` in `src/classes/Library`.

10. Confirm that everything works as intended before proceeding.

## Approach

- Import `React.Component`, and create a class that extends it.
- Create a `render` method, and add existing code to it before you start refactoring. The returned JSX should be identical.
- If you're managing state, create a `constructor`, and set the initial state inside. 

    - Be sure to call the `super` constructor before any other code.
    - If your component accepts props, call `super(props)`.

- Decide if you want function definitions to be class members or defined inside `render`, for example, the function that "likes" a book. Both approaches can work but require slightly different thinking.
- Remove all hooks.
- Anywhere state is referenced, replace `item` with `this.state.item`, or create a convenience variable: `const item = this.state.item`.
- Anywhere state is set, replace `setItem` with `this.setState({ item: "value"});`.
- Try it! There will likely be errors, but React error messages are pretty good. Use the error description and line number to squash the last few issues.

## Stretch Goals

Drive your development with `npm test` instead of troubleshooting with `npm start`.