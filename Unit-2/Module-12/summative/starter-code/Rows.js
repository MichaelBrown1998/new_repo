/* eslint-disable semi */
/* eslint-disable quotes */
function Row ({ games, notify }) {
  function handleDelete (game) {
    fetch(`http://localhost:8080/game/${game.id}`, { method: "DELETE" })
      .then(() => notify({ action: "delete", game }))
      .catch(error => notify({ action: "delete", error }));
  }

  function renderUserRows (games) {
    return games
      .map(
        (game) => {
          const { id, title, Rating, Description, Price, Studio, Quantity } = game;
          return (

          <tr>

            <td>{id}</td>
            <td>{title}</td>
            <td>{Rating}</td>
            <td>{Description}</td>
            <td>{Price}</td>
            <td>{Studio}</td>
            <td>{Quantity}</td>

            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(game)}>Delete</button></td>

            <td><button type="button" className="btn btn-success btn-sm" onClick={() => notify({ action: "edit-form", game })}>Update</button></td>

            <td>
              <label>Quantity</label>
              <select class="form-select" aria-label="Default select example">

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>

          </tr>

          )
        }

      );
  }

  return (
        <>
          {renderUserRows(games)}
        </>
  )
}

export default Row;
