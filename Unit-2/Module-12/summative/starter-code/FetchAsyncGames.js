/* eslint-disable semi */
/* eslint-disable quotes */
async function getGames () {
  const resp = await fetch("http://localhost:3030/games");
  const games = await resp.json();

  return games;
}

(async () => {
  console.log(await getGames());
})();
