# HTML Forms in React

Work through the setup and tasks below. The goal is to add forms to a project styled with Bootstrap. We will use both standard HTML elements and React Bootstrap components.

## Setup

1. Initialize a new React application named `conferences` with Create React App.

2. Install Bootstrap and React Bootstrap.

3. Start interactive development.

## Tasks

Work through the tasks in order. Don't jump ahead.

For each task, confirm your results in the browser before proceeding.

1. Create a form for a user to submit a convention presentation proposal.

- Create a new component named `ConferenceProposal`.
- Use standard HTML elements and Bootstrap classes to style the form.
- Required data and the corresponding HTML controls follow:

    | property | type | control |
    | ---  | --- | --- |
    | presentation title | string | input type="text" |
    | presentation description | string | textarea |
    | estimated duration in minutes | number | input type="number" |
    | topic: cooking, fishing, programming languages, human spaceflight, etc | string | select |
    | delivery: talk, video, performance | string | input type="radio" |
    | requires captioning | boolean | input type="checkbox" |

- Start small. Implement `title` and `description` first.
- All controls must be controlled components (set `value`, implement `onChange`, track state).
- State must be tracked as a single object.
- Create a generic `onChange` handler that can handle all controls.
- Add a Submit button, and handle submission.
- On submission, log the tracked object to the console.

Reminder: Bootstrap must imported somewhere in the application.

2. Create a React Bootstrap convention presentation proposal form.

- Create a new component named `ConferenceProposalReactBootstrap`.
- Copy the contents of the original component (be sure to change the name).
- Convert the form to React Bootstrap components.
- All other behavior must be identical. (On submission, log the tracked object to the console.)

3. Add validation to `ConferenceProposalReactBootstrap`.

- Update `ConferenceProposalReactBootstrap`.
- Track the`validated` state, and bind it to the `validated` attribute on the form, `validated={validated}`.
- Add the `noValidate` attribute to the form.
- Add validation attributes to controls. Requirements follow:

    | property | validation |
    | ---  | --- |
    | presentation title | required |
    | presentation description | required |
    | estimated duration in minutes | between 30 and 60 minutes |
    | topic: cooking, fishing, programming languages, human spaceflight, etc |  required |
    | delivery: talk, video, performance | required |
    | requires captioning | none  |