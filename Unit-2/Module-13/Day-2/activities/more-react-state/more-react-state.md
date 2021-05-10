# More React State

Create a new React application, and add components that manage state with the `useState` hook.

## Setup

1. Create a new React application named `state-and-events` with Create React App.
2. Open `state-and-events` with VS Code.
3. Start it with `npm start`.

## Technical Requirements

Track state with the `useState` hook.

## Tasks

Work through the following tasks in order. Don't jump ahead.

For each task, confirm your result in the browser before proceeding.

1. Create a component named `Counters`. It must have a minimum of three HTML elements: a button to decrease a value, a button to increase a value, and something to display the value. Track state with `useState`. State is a number and is initially 0. Use `onClick` handlers to decrease and increase the value.

2. Update `App.js`. 

    (**Heads up**: This is the last time that you will be explicitly instructed to change `App.js`. In the tasks that follow, we assume that you will make the changes required to preview and troubleshoot your components.)

    - Import `Counters` in `App.js`.
    - Update `App.js` to render `Counters`.

3. Add a second value and set of decrease/increase buttons to `Counters`. Track the second value. (Normally, this would be a good candidate for component-based design&mdash;we could make a component and include two of them&mdash;but in this instance, we want to track two values in one component.) Confirm that each value decreases and increases independently.

4. Add a message or a color change in `Counters` for each of the following three conditions:

    1. The first value is greater than the second.
    2. The first value is less than the second.
    3. The first and second values are equal.

5. Create a component named `BackgroundColor` that uses an HTML `<select>` to set the `background-color` of the component. 

    - Choose an initial background color and track it as state.
    - The `select` options must include the initial value.
    - Set the `select`'s `value` from state.
    - Implement `onChange` to update state.
    - The component's background color should change when the `select` changes.

6. Create a component named `Options` that allows a user to check or uncheck three yes/no statements.

    You can use the following three yes/no statements, or choose your own:
    - Allergic to cats
    - Likes corn
    - Owns a nail clipper

    Rules:
    - Each statement has an accompanying checkbox.
    - When the checkbox is checked, the statement should be displayed in **bold**.
    - When the checkbox is unchecked, the statement should be displayed with ~~strike-through~~ text.

    Approach: Start with a single checkbox and state, and confirm that it works. Then, move on to the others.

7. Create a component named `Echoes`. It must have a minimum of two HTML elements: a text input for entering a phrase, and something to display the phrase outside of the input. Track the phrase as state. Set the input's `value` with the initial phrase. Use `onChange` to update the phrase. Confirm that the phrase changes outside of the input as you type.

8. Update `Echoes`. Change the display to an unordered list (`ul`). Repeat the phrase five times inside list items (`li`). Confirm that all five list items update as you type.

9. Update `Echoes`. Add a `number` input, and track the number of list item repetitions as state. List items are no longer fixed to five items; they should adjust based on state. If the repetition value is zero or less, display a warning message instead of list items.

10. Challenge: Use the data below to build a recipe component named `Recipe`.

    ```js
    const initialSteps = [
        { step: 1, complete: false, task: "Soak Lentils: Rinse lentils and leave to soak in plenty of water for 1 hour. Drain in colander." },
        { step: 2, complete: false, task: "Heat ghee/oil in a heavy based saucepan over high heat. Add green chillies and fry for a minute until starting to blister." },
        { step: 3, complete: false, task: "Add onions and fry until softened." },
        { step: 4, complete: false, task: "Lower heat to medium, add garlic, ginger and curry leaves. Cook for 1 minute until garlic starts to turn golden and smells amazing." },
        { step: 5, complete: false, task: "Add tomatoes and cumin, cook until tomatoes start to break down and thicken to a paste - about 2 minutes." },
        { step: 6, complete: false, task: "Add lentils, water, tumeric and salt. Stir, bring to simmer, cover and simmer gently for 1 hour. Stir two or three times during the hour." },
        { step: 7, complete: false, task: "Remove lid and simmer gently for 30 minutes to thicken, stirring every now and then. The dal is ready when it has a consistency like porridge - some lentils should be intact but some have broken down to thicken the sauce." },
        { step: 8, complete: false, task: "Stir through garam masala at the end. Adjust salt if desired." },
        { step: 9, complete: false, task: "Pour over Tadka, if using, and stir through." },
        { step: 10, complete: false, task: "Serve Dal over rice, garnished with a sprig of coriander if desired." }
    ];
    ```

    - Recipe steps should be displayed with their step number and task.
    - If the step is incomplete, use the default text format.
    - If the step is complete, emphasize it with a different font, color, or font decoration.
    - The first, and only the first, incomplete task should be followed with a button that completes the task. When clicked, the button should mark the step's `complete` property as `true`. Reminder: Don't alter state directly. Create a copy of the steps, update the step to be complete, and then replace state with its setter function.

    Approach: Don't tackle everything at once. First, get the steps rendering without interaction or dynamic styles. Then, add a way to complete a step. At first, it's fine to have "Complete" buttons for every step. Once you can complete steps, change styles for the text of complete or incomplete steps. Finally, restrict the "Complete" button to only the first incomplete step&mdash;if all steps are complete, no button should display.