async function getGames() {
  const resp = await fetch("starter-code/games/Games.js");
  const games = await resp.json();

  return games;
}


(async () => {
  console.log(await getGames());
})();