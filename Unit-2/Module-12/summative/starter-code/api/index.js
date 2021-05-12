/**
 * Create an API for interacting with our designated endpoint.
 * @param {string} endpoint
 * @returns {Object}
 */

const api = {
  async create (
    newGame,
    endpoint = 'starter-code/games/Games.js'
  ) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGame)
    })
    return response.json()
  },
  async index (endpoint = 'starter-code/games/Games.js') {
    const res = await fetch(endpoint)
    return res.json()
  },
  async update ({
    dataUpdate,
    id,
    endpoint = 'starter-code/games/Games.js'
  } = {}) {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUpdate)
    })
    return response.json()
  },
  async delete (id, endpoint = 'starter-code/games/Games.js') {
    const response = await fetch(`${endpoint}/${id}`, { method: 'DELETE' })
    return response.json()
  }
}

export default api
