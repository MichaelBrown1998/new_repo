// Form data object from a form submission
// TODO: Adjust this to test out `validateForm`
const fd = {
    username: "marco1254",
    firstName: "Marco",
    lastName: "Polo",
    email: "",
    msg: "How can I get to China?",
  };
  
  // TODO: Make sure that your functions don't fail if we do validateForm() by using default parameter for the object
  
  // TODO: Use destructuring to get a `str`, `minLen` and `maxLen`
  // TODO: Use a default value of `6` for `minLen`
  function checkLen() {
    // TODO: return `true` or `false`
    return
  }
  
  function validateForm({ username, firstName, lastName, email, msg }) {
    // TODO: Validate using `if`s and early `return`s.
  
    // TODO: Delegate some of this work to `checkLen`
  }
  
  validateForm(fd);