# Doggie Day Care with ES Modules

For this activity, you'll continue working on your Doggie Day Care project. Specifically, you'll convert your project so that it uses ES modules. Consider copying your original project and then working on the copy so that you can compare the two versions.

## Tasks

1. Add `"type": "module"` to the `package.json` file.

2. Note that `index.js` can't contain any application code. It can only launch the Doggie Day Care UI.

    **Note:** All the application code must exist in modules. And, `index.js` uses the modules. It's import only.

3. Separate the concerns. Modularize your code. Consider the following possible boundaries:

    * User input functions

    * Dog management with no UI, such as the following:

      * `daycare.hasDog(name)`

      * `daycare.checkIn(name)`

      * `daycare.checkOut(name)`

    * The UI with no dog management (which the earlier module handles)

    **Hint:** Think about how you separate the concerns in a Java project. The same rules likely apply. If you have questions, check with your instructor.

4. Export your public API from each module. Wherever possible, make the implementations private.

5. Regenerate the ESLint configuration by using `npx eslint --init`. Specifically, enter the following so that the linter will use ES modules:

    * JavaScript Modules

    **Note:** Linting will fail without this change.

6. Run your app by using `npm start`.

7. Run the linter. If `test` isn't configured, do this by using `npm run pretest`. Otherwise, use `npm test`.

## Stretch Goals

* Add a cat room.

* Figure out how to manage several Doggie Day Care locations.

* Swap `prompt-sync` with a prompt library that supports colors and fonts.

  **Note:** This is available only in Zsh, Bash, and PowerShell.

* Research what adding testing would involve.
