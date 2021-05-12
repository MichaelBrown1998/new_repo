// importing different javascript pages to the index.
import Table from 'Table.js'
import Form from 'starter-code/components/Form.js'
import api from 'starter-code/api/index.js'

const root = document.querySelector('#root')

const state = {
  data: [],
  dataSorting: {
    id: 'bi-sort-alpha-down',
    title: 'bi-sort-alpha-down'
  }
}
function render () {
  root.innerHTML = state.data.length
    ? `
  ${Table(state)}
  ${Form()}
  `
    : '<p>There are no games to display here!</p>'

  root.querySelector('form')?.addEventListener('submit', (event) => {
    event.preventDefault()

    const newGame = {
      ...Object.fromEntries(new FormData(event.target)),
      ...{ id: state.data.length + 1 }
    }

    api.create(newGame).then(() => {
      state.data = [...state.data, newGame]
      render()
    })
  })

  root.querySelectorAll('.btn-danger').forEach((button) => {
    button.addEventListener('click', function () {
      const id4Deletion = this.closest('tr').querySelector('td').innerText
      api.delete(id4Deletion).then(() => {
        state.data = state.data.filter(({ id }) => id !== Number(id4Deletion))
        render()
      })
    })
  })

  root.querySelectorAll('table input').forEach((input) => {
    input.addEventListener('change', function () {
      const key4Update = this.dataset.key
      const value4Update = this.value
      const id4Update = this.closest('tr').querySelector('td').innerText

      api
        .update(
          { [key4Update]: value4Update },
          id4Update
        )
        .then(() => {
          const game2Update = state.data.find(
            ({ id }) => id === Number(id4Update)
          )

          const updatedGame = {
            ...game2Update,
            ...{ [key4Update]: value4Update }
          }

          state.data = [
            ...state.data.filter(({ id }) => id !== Number(id4Update)),
            updatedGame
          ].sort((currentItem, nextItem) => currentItem.id > nextItem.id)

          render()
        })
    })
  })

  root.querySelectorAll('table i').forEach((icon) => {
    icon.addEventListener('click', function () {
      const key4Sorting = this.dataset.key
      state.dataSorting[key4Sorting] = state.dataSorting[key4Sorting].endsWith(
        'down'
      )
        ? 'bi-sort-alpha-up'
        : 'bi-sort-alpha-down'

      state.data = state.data.sort((currentItem, nextItem) =>
        state.dataSorting[key4Sorting].endsWith('down')
          ? currentItem[key4Sorting] > nextItem[key4Sorting]
          : currentItem[key4Sorting] < nextItem[key4Sorting]
      )

      render()
    })
  })
}

(async () => {
  state.data = await api.index()
  console.log(state.data)
  render()
})()

render()
