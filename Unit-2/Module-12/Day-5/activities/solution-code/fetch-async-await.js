// Let JS know that this function is to run asynchronously
async function getUsers() {
  // Tell JS to go on ahead with any other tasks it might need to do and come back here when these AWAITED results are ready.
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await resp.json();

  return users;
}

/**
 * An ANONYMOUS ASYNCHRONOUS FUNCTION...
 * is wrapped inside of `()`...
 * with another set of `()`...after this.
 *
 * This will IMMEDIATELY INVOKE the ANONYMOUS ASYNCHRONOUS FUNCTION EXPRESSION wrapped inside of `()`
 */
(async () => {
  console.log(await getUsers());
})();
