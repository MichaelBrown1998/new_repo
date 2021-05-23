/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */

import Row from "../Rows";

function Table ({ games, notify, id }) {
  console.log(games);
  function handleDelete (game) {
    fetch(`http://localhost:8080/game/${game.id}`, { method: "DELETE" })
      .then(() => notify({ action: "delete", game }))
      .catch(error => notify({ action: "delete", error }));
  }
  const dataSorting = {};
  return (
    <>
      <div className ="container">
        <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="row">ID<i className="bi {dataSorting.id}" data-key="id"></i></th>

              <th scope="col">Title<i className="bi {dataSorting.title}" data-key="title"></i> </th>

              <th scope="col">Rating<i className="bi {dataSorting.Rating}" data-key="Rating"></i> </th>

              <th scope="col">Description<i className="bi {dataSorting.description}" data-key="Description"></i> </th>

              <th scope="col">Price<i className="bi {dataSorting.price}" data-key="Price"></i> </th>

              <th scope="col">Studio<i className="bi {dataSorting.studio}" data-key="Studio"></i> </th>

              <th scope="col">Quantity<i className="bi {dataSorting.quantity}" data-key="Quantity"></i> </th>

            </tr>
          </thead>
          <tbody>
          {/* {renderUserRows(games)} */}
            <Row games ={games} notify ={notify} id ={id}></Row>
          </tbody>
        </table>

        </div>
      </div>
    </>
  )
}

export default Table;