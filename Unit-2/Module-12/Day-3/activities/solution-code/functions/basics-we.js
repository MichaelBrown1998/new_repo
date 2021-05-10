/**
 * FUNCTION DECLARATION - uses `function` keyword
 * PARAMETERS - specified when declaring a function
 * This is information that a function needs to do its job
 */
function add2Nums(num1, num2) {
  return num1 + num2
}

/**
 * Invoke a function by passing in ARGUMENTS
 * These arguments are bound to the function's parameters for the life of the function's invocation.
 *
 * `2` is bound to `num1`, etc.
 * These bindings are broken once `add2Nums` is finished running.
 *
 * We can `log` or assign the returned results from the function
 */
const sum = add2Nums(2, 3)

/**
 * What if we invoke the function without arguments?
 * The parameters will both be `undefined`
 * `undefined + undefined` will cause NaN to be returned
 */
const badSum = add2Nums()
console.log(badSum)

/**
 * What if we pass in additional arguments?
 * Nothing bad, we still get the return.
 * The first 2 arguments are used since there are 2 parameters.
 * All of the rest are thrown away and garbage collected.
 */
const anotherSum = add2Nums(1, 4, 5, 6, 7, 8)