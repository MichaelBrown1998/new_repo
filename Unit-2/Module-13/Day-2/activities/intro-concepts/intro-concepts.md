# Intro Concepts

## Goals

Create a React application using `create-react-app`. Run it. Make small modifications and review the results in both the console and the browser.

## Tasks

You may have covered the first two tasks with your instructor. If you did, skip to Task 3.

### 1. Create the app.

- Use `npx` and `create-react-app` to create a React application named `intro-concepts`.

```sh
> npx create-react-app intro-concepts
```

### 2. Open the app with VS Code and start it.

```sh
> npm start
```

- Wait for your default browser to open the app. Open your browser developer tools. Review the rendered HTML.

### 3. Remove the "cruft" from the project.

>Some of the cruft is useful for specific reasons, but you don't need it for your first React application. You are creating the minimum viable React application.

- Delete the following files:

   - `public/favicon.ico`
   - `public/logo192.png`
   - `public/logo512.png`
   - `public/manifest.json`
   - `public/robots.txt`

- Update `public/index.html` to the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intro Concepts</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

- Delete the following files:

   - `src/App.css`
   - `src/App.test.js`
   - `src/index.css`
   - `src/logo.svg`
   - `src/reportWebVitals.js`
   - `src/setupTests.js`

- The final directory structure is as follows:

```
first-react-app
│   .gitignore             // Prevent node_modules commits!
│   package-lock.json      // npm package lock
│   package.json           // package tracking, shockingly small because of `react-scripts`
│   README.md              // instructions for proper use and next steps
│   
├───node_modules           // so, so many dependencies...
│           
├───public
│       index.html         // the HTML document that hosts the React app
│       
└───src
        App.js             // A component!
        index.js           // Mounts our component to index.html DOM
```

### 4. Fix the broken bits.

- Your application should be broken at this point. Both your console and your browser should be displaying error messages. To fix it, edit `App.js` and `index.js`. You'll mostly remove CSS.

- First, update `index.js` to the following:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

- Then, update `App.js` to the following:

```jsx
function App() {
  return (
    <h1>Intro Concepts</h1>
  );
}

export default App;
```

- If your browser displays anything besides an `h1` that says "Intro Concepts", refresh it.

### 5. Update the App.js component.

- Change the text in `App.js`'s `h1`, as the following code shows: 

```jsx
function App() {
  return (
    <h1>In some places, "chips" are french fries.</h1>
  );
}

export default App;
```

- Preview this change in the browser.

- Note that the "HTML" in `App.js` isn't really HTML. It can't be, because this is a JavaScript file. The markdown-like syntax is called JSX. It's a JavaScript syntax extension that was pioneered by the React team.

- Try different JSX values in `App.js`'s return statement.

```jsx
function App() {
  return (
    <div>
      <h1>Intro Concepts</h1>
      <p>Mithridatism is the practice of protecting oneself against a poison by gradually self-administering non-lethal amounts.
      The word is derived from Mithridates VI, the King of Pontus,
      who so feared being poisoned that he regularly ingested small doses, aiming to develop immunity.
      </p>
    </div>
  );
}

export default App;
```

- JSX requires one root node. It's not possible to render siblings.

```jsx
// ERROR
return (
    <h1>Intro Concepts</h1>
    <h2>Mithridatism</h2>
);
```

- Keep experimenting.

```jsx
function App() {
  return (
    <ul>
      <li>Lemon</li>
      <li>Orange</li>
      <li>Grapefruit</li>
    </ul>
  );
}

export default App;
```

```jsx
function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hawaii</td>
          <td>Honolulu</td>
        </tr>
        <tr>
          <td>Alaska</td>
          <td>Juneau</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
```

- Try an HTML form.

- Which HTML works as expected? Which HTML works but renders strangely? Which HTML doesn't work at all?

### 6. Shut down.

- When you're finished, close your browser and shut down the CRA development server with "Ctrl" + "C" or "Cmd" + "C" in the console.