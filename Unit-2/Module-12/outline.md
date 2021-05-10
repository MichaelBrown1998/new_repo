# Outline: Module 5 HTML, CSS, JS, Fullstack SPAs

This module reviews the basic concepts of the web, including HTML, CSS, JS. It then introduces [Bootstrap 5,](https://getbootstrap.com/docs/5.0/getting-started/download/#package-managers) emphasizing how to use documentation to implement components. Next, JS fundamentals are reviewed and we quickly transition into intermediate concepts, including retrieving and parsing JSON datasets. JS concepts most relevant to a future understanding of React are emphasized. 

The module concludes with coverage of SPA concepts and components. Bundlers are introduced using [ParcelJS](https://parceljs.org/). The students then apply said concepts to create a full stack application that interacts with a Swing backend.

## Day 1 - Web, HTML, CSS and Bootstrap

### Lesson 1: Web, HTML, and CSS

Assumption: Students already understand the fundamental structure and roles of HTML and CSS.

* How Does the Web Work?
* Website vs Web App
* Dev Tools
* What is 'Mobile-First' Responsive Web Design (RWD)?
* Web Dev Tool Kit
* Explore Common 'Frontend Web Dev' Tooling
* Installations and Setup
  * VSCode (Review extensions and settings)
  * NodeJS/`npm` (Review tooling like linters and [`browser-sync`](https://browsersync.io/))
* The Role of HTML and Common Tags
* Review Starter Code
* Write the HTML for a Landing Page
* The Role of CSS and Common Theming Techniques Including Layouts with Flexbox
* Apply CSS to Theme and Layout the Landing Page
* Customize and Complete the Responsive Design

### Lesson 2: CSS Bootstrap

* What is CSS Bootstrap?
* Getting Started with Bootstrap
* Create a 3-Page Website Similar to Our Previous
* Customize Bootstrap
* Review the Desktop View and Customize (CSS Variables)

## Day 2 - JavaScript Fundamentals

### Lesson: JS Fundamentals

Assumption: Students already know enough about programming fundamentals from their Java understand.

We focus on syntax and explaining the dynamically typed nature of JS.

* Modern Javascript and Googling
* Dev Tools Console (REPL)
* JavaScript Fundamentals
  * Dynamic Data Types - Primitives (`typeof`)
  * Variable Declaration with `const` and `let` (Use `const` More)
  * Operators and Operands (`===` vs `==` - stick with `===`)
  * Conditional Logic and Ternary
  * `switch`- `case`
  -`for` and `while`
* String Concatenation and Template Literals
* Collection/Composite Data Types: Arrays
  * Mutations
  * Use Looping to `log` and/or _Mutate_ Data in an Array
  * Array and String Methods
  * Destructuring
  * Spread
  * Arrays and Strings
* Collection/Composite Data Types: Object Literals
  * Examples
* Values vs References

## Day 3 - JS Functions

### Lesson: JS Functions

* `function`, Parameters (Default Parameters), Arguments and `return`
* Function Naming and Pure Functions
* Early and Implicit `return`s
* Destructured and Default Parameters
* Variables and Scoping (Avoid Variable Shadowing!)
* Variadic Parameters with Rest Operator
* Functions Inside Objects (Methods)
  * `this`
* Asynchronicity, Web API and Callback Functions
  * `setTimeout()`
* Document Object Model (DOM)
  * Common DOM Properties and Methods (`innerText`, `querySelector`, etc.)
  * User-Driven Events

## Day 4

### Lesson: JS Fucntions 2

* Arrow Syntax
* Function Factories to Create Objects
  * Object Shorthand
* OOP and Prototypes
* `forEach`
* ``map`, `filter`
* `reduce`
* Initialize Accumulator with Optional Second Parameter
* Conditional Classes

## Day 5

### Lesson 1: Fetch and Single Page Applications (SPA)s

* RESTful APIs
* Asynchronicity in JS - Callbacks vs Promises (Brief!)
  * `fetch` and HTTP Methods
  * `then` vs `async`-`await`
  * Anonymous Asynchronous Immediately Invoked Function Expressions (IIFEs)
* Check for Understanding: HTML/CSS `<table>`
* SPA Concepts
  * Views - components + state
  * `render`sRender a Dynamic Bootstrap Table with `fetch`ed Data
* `#root`
* Functional Components to Generate HTML
* ES Modules - `import`/`export`
  * Modularize `api` and `components`
* Passing Props from `state`
* Bootstrap `<table>`
* Conditional Rendering and Classes
* `fetch` - RESTful API - Create, Read, Update and Delete (CRUD)
* Updating `state` Using ES6 Immutability Patterns
* Additional JS Methods
  * `String.prototype.endsWith()`
  * `Array.prototype.find()`
  * Applying Data Attributes (`dataset`)

### Capstone

Build a web interface with a Spring backend.
