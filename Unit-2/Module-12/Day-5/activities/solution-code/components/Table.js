function renderUserRows(users) {
  return (
    users
      .map(
        ({ id, name, email, phone }) => `
  <tr>
    <td>${id}</td>
    <td><input value="${name}" data-key="name" /></td>
    <td><input value="${email}" data-key="email" /></td>
    <td><input value="${phone}" data-key="phone" /></td>
    <td><button type="button" class="btn btn-danger btn-sm">Delete!</button></td>
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
      <th scope="col">Name <i class="bi ${
          dataSorting.name
      }" data-key="name"></i></th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   ${renderUserRows(data)}
  </tbody>
</table>
`;

export default Table;
