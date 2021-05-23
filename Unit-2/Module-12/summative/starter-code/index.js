/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
// importing different javascript pages to the index.
import { useEffect, useState } from 'react';
import Table from "./components/Table.js";
import Form from "./components/Form.js";
import api from "./api/index.js";
import GameFilter from "./GameFilter";
import Rows from "./Rows"

function Games () {
  const [games, setGames] = useState([]);
  const [scopedGame, setScopedGame] = useState({ id: 0 });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState();
  const [refresh, setRefresh] = useState(0);
  const [filterText, setFilterText] = useState("");

  console.log(games);
  useEffect(() => {
    fetch("http://localhost:8080/game")
      .then(response => response.json())
      .then(result => setGames(result))
      .catch(err => console.log(err));
  }, [refresh]);

  function addGameClick () {
    setScopedGame({
      id: 0,
      title: "",
      Rating: "",
      description: "",
      price: "",
      studio: "",
      quantity: "",
    });
    setShowForm(true);
  }

  function getFilteredGames (games) {
    // only select by one!
    console.log(games, filterText)
    return games.filter(g => g.studio.toLowerCase().includes(filterText.toLowerCase()))
    // check the filter for each box that is checked
  }

  function updateFilterText (evt) {
    // all information needed thats why it is an event
    setFilterText(evt.target.value)
    console.log(evt)
  }

  function notify ({ action, game, error }) {
    console.log(action, game, error)
    if (error) {
      setError(error);
      setShowForm(false);
      return;
    }

    switch (action) {
      case "add":
        setGames([...games, game]);
        break;
      case "edit":
        setRefresh(refresh + 1)
        break;
      case "edit-form":
        setScopedGame(game);
        setShowForm(true);
        return;
      case "delete":
        setGames(games.filter(g => g.id !== game.id));
        break;
    }
    setShowForm(false);
  }

  if (showForm) {
    return <Form game={scopedGame} notify={notify} />
  }

  return (
    <>
        <div className="row mt-2">

            <div className="col-8">
                <h2>Games Inventory:</h2>
            </div>

            <div className="col">
                <button className="btn btn-primary" onClick={addGameClick}>Add a Game</button>
            </div>

        </div>
        {error && <div className="alert alert-danger">{error}</div>}

        <GameTable games={getFilteredGames(games)} notify={notify}/>

            <div className="col-4">
                <GameFilter filterText ={filterText} setFilterText = {setFilterText}/>
            </div>

    </>
  );
}

export default Games;
