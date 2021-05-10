# Sharing State

Work through the setup and tasks below. The tasks add child-to-parent state sharing.

## Setup

Open the `starter-code` directory (a CRA application) with VS Code.

Install dependencies with `npm install`.

Start it with `npm start`.

Complete the tasks below.

### FYI

Sometimes we want to use an existing project as a starting point. If that's the case, do not copy all of the resources from one directory to another&mdash;that takes too much time. `node_modules` is huge, and the OS isn't optimized to copy tens of thousands of directories and files.

1. Create a new directory to hold the cloned project.
2. Copy all resources from the source project to the clone, except for `node_modules`.

    ![Do not copy node_modules.](../../assets/copy-project.png)

3. Open the clone with VS Code.
4. Browse inside the clone via terminal, and execute `npm install`. The installation is much faster than a directory copy, though it still takes a while. Once it's complete, you're ready to go.

## Tasks

Work through the tasks in order. Don't jump ahead.

For each task, confirm your results in the browser before proceeding.

1. Create a component named `Clicker`. It needs a button and an element to display the number of clicks from the button. Track clicks as state with `useState`. Confirm it works in the browser.

    Update `App.js` to import and use the component you want to preview.

2. Create a component named `ClickerParent`. 

    Requirements:

    - Has four `Clicker` children.
    - Has an element to display the grand total number of clicks from all `Clicker`s.
    - The grand total is tracked as state.
    - Passes a callback function via props to increment the grand total.
    - Passes the grand total via props.

3. Update `Clicker`.

    - Accept the callback and grand total props.
    - When the button is clicked, execute the callback as well as increment the private instance state.
    - Use the grand total to calculate and show the percent of clicks this button contributed to the grand total.

4. Create a component named `SynchronizedText`.

    - It accepts two props: a phrase and an `onChange` callback that accepts a new phrase.
    - Add a text input.
    - Set the input's `value` to the phrase.
    - Add an `onChange` attribute to the input. Inside, trigger the `onChange` callback prop with `event.target.value`.

5. Create a component named `SynchronizedTextContainer`.

    - Track a phrase as state with `useState`.
    - Add an `h1` that displays the phrase.
    - Create a callback function to update the phrase.
    - Add four `SynchronizedText` components, and pass both the phrase and callback as props.

    Confirm your work in the browser. As you type in any `SynchronizedText` input, all inputs should update simultaneously along with the `SynchronizedTextContainer`'s `h1`.

6. Update `Library`.

    - Remove all props.
    - Track an array of books with `useState`.
    - Set the initial state to the following:

        ```js
        const cookbooks = [
            { title: "Pizza Is Easy", description: "These pizzas might be easy, but they're not good.", likes: 0 },
            { title: "Just Fry It", description: "Delicious and greasy", likes: 0 },
            { title: "Fruit Is Delicious", description: "It really is.", likes: 0 }
        ];
        ```

        Note the new `likes` property.

    - Change the library name to the literal string "Cookbooks".
    - Create a callback for incrementing likes that doesn't do anything but log a message to the console.
    - Create a callback for deleting books by their title that doesn't do anything but log a message to the console. 
    - `Array.map` books to a `Book` component. Pass a book, the like callback, and the delete callback as props.

7. Update `Book`.

    - When the Like button is clicked, execute the like callback.
    - Add a Delete button.
    - When the Delete button is clicked, execute the delete callback.

    Confirm the callback console messages show when the buttons are clicked.

8. Revisit `Library`. Finish the callbacks. Remember, we can't change the `books` array directly. We must transform the array into a new array and use the new array to replace existing state.