function renderUserRows(games) {
  return (
    games
      .map(
        ({ id, title, rating, description, price, studio, quantity }) => `
  <tr>
    <td>${id}</td>
    <td><input value="${title}" data-key="title" /></td>
    <td><input value="${rating}" data-key="rating" /></td>
    <td><input value="${description}" data-key="description" /></td>
    <td><input value="${price}" data-key="price" /></td>
    <td><input value="${studio}" data-key="studio" /></td>
    <td><input value="${quantity}" data-key="quantity" /></td>
    <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>
  </tr>
  `
      )

      // Join the mapped array back into an HTML string with line breaks
      .join("\n")
  );
}

const Table = ({ data, dataSorting }) => `
<table class="table">
  <thead>
    <tr>
      <th scope="row">ID<i class="bi ${dataSorting.id}" data-key="id"></i></th>
      <th scope="col">Title <i class="bi
       ${
        dataSorting.title
      }" data-key="title"></i></th>
      <th scope="col">rating</th>
      <th scope="col">description</th>
      <th scope="col">rating</th>
      <th scope="col">price</th>
      <th scope="col">studio</th>
      <th scope="col">quantity</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   ${renderUserRows(data)}
  </tbody>
</table>
`;

export default Table;