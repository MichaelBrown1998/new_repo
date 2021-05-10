fetch("https://jsonplaceholder.typicode.com/users")
  .then(
    /**
     * Receive the RESPONSE STREAM.
     * Asynchronously read it to completion - recall that we don't have control over how quickly the stream can be read, etc.
     * Return another promise that wraps up the JSON.
     * Chain another `then` to unwrap the JSON data.
     */
    (res) => res.json()
  )
  .then((users) => {
    console.log(users);
  });
