# Testing with Jest

Add tests to an existing project.

## Setup

1. Open `starter-code` with VS Code.

2. Install dependencies with `npm install`.

3. Start interactive testing with `npm test`.

## Tasks

Work through the tasks in order. Don't jump ahead.

For each task, confirm all tests work before proceeding.

1. Add the following component, `LabeledButton`, to the project.

    ```jsx
    import { useState } from 'react';

    function LabeledButton({ label }) {

        const [clicks, setClicks] = useState(0);

        return (
            <>
                <h4>{label}</h4>
                <button onClick={() => setClicks(clicks + 1)}>Click</button>
                <span>{clicks}</span>
            </>
        );
    }

    export default LabeledButton;
    ```

2. Add a test file named `LabeledButton.test.js`.

    - Add a test that confirms the `h4` text has been properly set.
    - Use the `render` function to render a `LabeledButton` with the appropriate props.
    - Use `getByText` to find the `h4` based on the label prop.
    - Confirm it exists with the `toBeInTheDocument` matcher.

3. Use the DOM API.

    - Create a second test in `LabeledButton.test.js`.
    - Render the `LabeledButton`.
    - Use the standard DOM API to find the `span` in the component. You can use `document` or `render(<Jsx />).baseElement`.
    - Confirm its `innerHTML` is`"0"`.

4. Click the button.

    - Create another test in `LabeledButton.test.js`.
    - Render the `LabelButton`.
    - Click its button a couple times.
    - Confirm the `span` updated.

5. Add a test file for `Book.js`.

    - Create a test that counts the number of times the Like button is clicked.
    - Create a mock function with `jest.fn()` for the **like** callback.
    - Render the `Book` component with a book prop and mock callback props.
    - Confirm the book title is correct.
    - Click the Like button.
    - Confirm the callback was executed with `toHaveBeenCalledTimes(n)`.

6. Mock `fetch`.

    - Add a test file for the `Encounters` component.
    - Write a test that loads the initial encounters and confirms the correct number of HTML elements.
    - Mock the `fetch` function with `jest.spyOn`. The mock implementation should return three mock encounters.
    - Render the component `async`.
    - Determine an HTML element you can use to count encounters. Confirm there are three.

7. Stretch Goal: Mock a React Router URL parameter.

    - Add a test file for the `Bee` component.
    - Create a test that loads the bee family based on a URL.
    - Wrap the bee family component in a properly configured Router to get the test to work.
    - Confirm the component displays the correct elements based on the URL.