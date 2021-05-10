# React Router

Refactor an existing project to use React Router. Work through the setup and tasks below.

## Setup

1. Open the `starter-code` directory (a CRA application) with VS Code.

2. Install dependencies with `npm install`.

3. Install the React Router with the following:

    ```sh
    > npm install react-router-dom
    ```

4. Start it with `npm start`.

5. Complete the tasks below.

## Tasks

Work through the tasks in order. Don't jump ahead.

For each task, confirm your results in the browser before proceeding.

1. Add the React Router to `App.js`.

- Remove the `activeTab` state and the click handler.

- Import the required components from `react-router-dom`.

- Add the `Router` component.

- Convert Bootstrap navigation to use `NavLink`s:

    ```js
    <ul className="nav">
        <li className="nav-item">
            <a href="#library" onClick={handleClick} className={"nav-link" + (activeTab === "library" ? " active" : "")}>Library</a>
        </li>
        <li className="nav-item">
            <a href="#paranormal" onClick={handleClick} className={"nav-link" + (activeTab === "paranormal" ? " active" : "")}>Paranormal Encounters</a>
        </li>
        <li className="nav-item">
            <a href="#bees" onClick={handleClick} className={"nav-link" + (activeTab === "bees" ? " active" : "")}>Bees</a>
        </li>
    </ul>
    ```


- Remove the `tabContent` variable and `switch`.

- Add a `Switch` with `Route`s to render the appropriate component based on the path.

- Confirm that everything works.

2. Add nested routing to `Bees.js`.

- Remove the `family` state and the click handler.

- Import the required components from `react-router-dom`, including the `useRouteMatch` hook.

- Add the `Router` component.

- Use the `useRouteMatch` hook to capture URL context.

- Convert Bootstrap navigation to use `NavLink`s:

    ```js
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a href="#Apidae" onClick={handleClick} className={"nav-link" + (family === "Apidae" ? " active" : "")}>Apidae</a>
        </li>
        <li className="nav-item">
            <a href="#Halictidae" onClick={handleClick} className={"nav-link" + (family === "Halictidae" ? " active" : "")}>Halictidae</a>
        </li>
        <li className="nav-item">
            <a href="#Melittidae" onClick={handleClick} className={"nav-link" + (family === "Melittidae" ? " active" : "")}>Melittidae</a>
        </li>
    </ul>
    ```


- Remove the `tabContent` variable and `switch`.

- Add a `switch` with `Route`s to render the appropriate component based on the path. Each `Route` maps to a specific instance of `Bee`.

    For example:

    ```jsx
    <Route path={`${path}/Apidae`}>
        <Bee family="Apidae" />
    </Route>
     <Route path={`${path}/Halictidae`}>
        <Bee family="Halictidae" />
    </Route>
    {/* etc...*/}
    ```

3. Add a URL parameter to `Bees.js` and `Bee.js`.

In `Bees.js`:

- Remove family-specific routes, and replace them with a single route that passes a URL parameter named `family`.

    ```jsx
    <Route path={`${path}/:family`}>
    ```

In `Bee.js`:

- Remove the `family` prop.

- Import the `useParams` hook from `react-router-dom`.

- Use the `useParams` hook to retrieve the `family` value from the URL.

- Use the retrieved `family` to resolve the bee family.