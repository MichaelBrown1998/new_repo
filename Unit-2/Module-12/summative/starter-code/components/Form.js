const Form = () => `
<form>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" name="title">
    </div>

  <div class="mb-3">
    <label for="rating" class="form-label">Esrb rating</label>
    <input type="rating" class="form-control" id="rating" name="rating">
  </div>

  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="description" class="form-control" id="description" name="description">
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="price" class="form-control" id="price" name="price">
  </div>

  <div class="mb-3">
    <label for="studio" class="form-label">Game Studio</label>
    <input type="studio" class="form-control" id="studio" name="studio">
  </div>

  <div class="mb-3">
    <label for="quantity" class="form-label">Quantity</label>
    <input type="quantity" class="form-control" id="quantity" name="quantity">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

export default Form;