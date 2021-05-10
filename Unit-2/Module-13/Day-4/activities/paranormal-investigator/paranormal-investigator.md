# Paranormal Investigator

Start a new React project backed with a REST API. The project reads data from and writes data to the API.

The project tracks potential paranormal encounters.

## Setup

1. Open the `paranormal-investigator-api` project from `starter-code` with IntelliJ. It's an IntelliJ and Maven project and your back-end data source. Run it. It's listening at http://localhost:8080.

    You are not allowed to change the Java code unless your instructor approves.

2. Create a new React project with `create-react-app` named `paranormal-Investigator`.

3. Install `react-bootstrap` and `bootstrap`.

4. Start the project. It's available on http://localhost:3000. The API is configured to accept requests only from localhost:3000.

## The API

Restarting the API will reset the initial data. That can be helpful if you've deleted all encounters and have no way to add a new one.

### Encounter JSON Sample

```js
{ 
    "id": 1, 
    "brief": "Tingling sensation", 
    "details": "I swear something is near me. I just know it.", 
    "dateTime": "19-Feb-2021 11:35AM", 
    "imageUrl": "http://example.com/path/to/an/image.png"
}
```

### Endpoints

| URL | Method | Request Body | Success Status |
| --- | --- | --- | -- |
| http://localhost:8080/api/encounter | GET | - | 200 |
| http://localhost:8080/api/encounter | POST | Encounter | 201 |
| http://localhost:8080/api/encounter/{id} | PUT | Encounter | 204 |
| http://localhost:8080/api/encounter/{id} | DELETE | - | 204 |

Use Postman to explore the API.

### Gotchas

The encounter's `dateTime` property requires the format: `dd-MMM-yyyy hh:mma`.

Examples:

- 10-Mar-2019 10:13AM
- 07-Jul-2020 08:47PM
- 24-Feb-2021 03:33AM

Any deviation from the format will result in a `null` `dateTime`.

## Tasks

The tasks below are in priority order. There's too much to do, so don't worry if you don't complete all of the tasks. The main priority is fetching the initial data with `fetch` inside of `useEffect`.

1. Create a component named `Encounters` to display encounters. There are three initial encounters from the API. Display encounters in any layout and presentation you prefer. 

    Note: Encounters contain an `imageUrl`, which can be used to embed an `<img>` in the JSX, though `imageUrl` can be null.

    Fetch initial state with `fetch` inside of `useEffect`. Track encounters as state with `useState`. Hooks must execute and must always execute in the same order. Put all `useState` calls first.

    Start small. Your first priority is to get something to show up in the browser that came from the back-end API.

2. Build a component named `EncounterCard` that handles the display of an individual encounter. Use a [Bootstrap Card](https://getbootstrap.com/docs/4.6/components/card/) to display the encounter. Pass an encounter via props from `Encounters`.

3. Create a form component named `EncounterForm` for adding an encounter.

    - Track the encounter object as a whole object.
    - Use controlled components.
    - Write a single change handler to manage all control changes.
    - Decide if you want to execute the `fetch` (POST) in the form component or in the parent.
    - Use callbacks to communicate state changes.
    - Decide how to render the form component conditionally when an add is requested.

4. Delete an encounter.

    - If you have a individual encounter display component, decide where you want to execute the `fetch` (DELETE)&mdash;in the child or the parent.
    - If you have a individual encounter display component (it's not required), use callbacks to communicate state changes.
    - Be sure the parent state is updated on fetch success.
    - Stretch goal: Communicate fetch failure in the UI.
    - If all encounters have been deleted, display a message in the parent, "No encounters found...".

5. Edit an encounter.

    - You can either create an edit-specific component or try to reuse the encounter form component.
    - Show the component when an edit is requested.
    - If using the same form component, decide how to differentiate between add and update.
    - Use callbacks to update state in the parent.

## Shut Down

- Stop `paranormal-investigator-api` in IntelliJ, and close it.

- Stop `paranormal-investigator` in the terminal&mdash;Windows/Linux: <kbd>Ctrl+C</kbd>, Mac: <kbd>Cmd+C</kbd>