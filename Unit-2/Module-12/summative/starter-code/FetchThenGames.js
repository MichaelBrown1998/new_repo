/* eslint-disable quotes */
/* eslint-disable semi */
fetch("https://localhost:3030/games")
  .then(
    (res) => res.json()
  )
  .then((games) => {
    console.log(games);
  });
