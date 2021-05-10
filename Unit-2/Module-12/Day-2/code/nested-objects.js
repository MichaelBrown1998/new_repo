const employee = {
    name: "Horace Grant",
    company: {
      name: "Chicago Bulls"
    }
  }
  
  // Chain dot notation
  console.log(employee.company.name);
  
  /**
   * What if we use chaining on a property that doesn't exist? TYPE ERROR!
   * 'Cannot read property `name` of undefined'
   *
   * `employee.otherCompany` is `undefined` - that's OK.
   * `undefined.name` - NO! Cannot access a property on `undefined`
   * `undefined` cannot have properties.
   */
  console.log(employee.otherCompany.name)