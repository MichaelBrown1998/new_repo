# Doggie Day Care

For this activity, you'll write a JavaScript command-line application to manage a doggie day care center. The user is the day care administrator, who can do the following:

* Check a dog in (that is, process a drop-off).

* Check a dog out (that is, process a pickup).

* Display all the dogs in the day care.

## Rules

* The day care can hold only 20 dogs.

* The day care identifies the dogs by name, so we can't add a duplicate. The customer can choose to add a last name or use a nickname to keep the names unique.

* During a pickup, the name comparisons are case insensitive.

## Tasks

1. Create a new JavaScript package/project by using `npm init`.

2. Add a `start` script to `package.json`.

3. Run your code by using `npm start`.

4. Download and install `prompt-sync` by using `npm install`.

5. Exclude `node_modules` from Git by using the `.gitignore` file.

6. Download and install `eslint` as a development dependency.

7. Initialize the ESLint configuration by using `npx eslint --init`.

8. Add an ESLint `pretest` script to `package.json`.

9. Run the `pretest` script to find errors, problems, and suggestions.

## UI Examples

This section offers user interface (UI) examples for your inspiration only. Design your UI in the way that works best for your users.

### Main Menu

```text
Welcome to Doggie Day Care.

Main Menu
=========
0. Exit
1. Drop-Off
2. Pickup
3. Display the Dogs
Choose 0–3:
```

### Drop-Off: Success

```text
Drop-Off
========
Dog name: Juno
Juno joined the pack.
```

### Drop-Off: Duplicate Name

```text
Drop-Off
========
Dog name: juno
We already have a dog by that name. Can you add a last name?
Dog name: juno x.
juno x. joined the pack.
```

## Pickup: Success

```text
Pickup
======
Dog name: Juno
Juno is all checked out.
```

## Pickup: Name Mismatch

```text
Pickup
======
Dog Name: junox
junox isn't in our pack.
```

## Display the Dogs

```text
Display the Dogs
================
Juno
Moe
Ashi
Crom
```
