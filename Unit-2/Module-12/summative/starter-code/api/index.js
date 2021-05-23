/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */

/**
 * Create an API for interacting with our designated endpoint.
 * @param {string} endpoint
 * @returns {Object}
 *
 */
const api = {
  async create (
    newGames,
    endpoint = "https://localhost:3030/game"
  ) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGames),
    });
    return response.json();
  },
  async index (endpoint = "http://localhost:3030/game") {
    const res = await fetch(endpoint);
    return res.json();
  },

  // With 3 parameters, destructured parameters will be helpful
  async update ({
    dataUpdate,
    id,
    endpoint = "https://localhost:3030/game/{id}",
  } = {}) {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });
    return response.json();
  },

  async delete (id, endpoint = "https://localhost:3030/game/{id}") {
    const response = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    return response.json();
  },
};

export default api;
