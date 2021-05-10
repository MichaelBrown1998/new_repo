/**
 * Create an API for interacting with our designated endpoint.
 * @param {string} endpoint
 * @returns {Object}
 */
const api = {
  async create(
    newUser,
    endpoint = "https://jsonplaceholder.typicode.com/users"
  ) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    return response.json();
  },
  async index(endpoint = "https://jsonplaceholder.typicode.com/users") {
    const res = await fetch(endpoint);
    return res.json();
  },

  // With 3 parameters, destructured parameters will be helpful
  async update({
    dataUpdate,
    id,
    endpoint = "https://jsonplaceholder.typicode.com/users",
  } = {}) {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });
    return response.json();
  },

  async delete(id, endpoint = "https://jsonplaceholder.typicode.com/users") {
    const response = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    return response.json();
  },
};

export default api;
