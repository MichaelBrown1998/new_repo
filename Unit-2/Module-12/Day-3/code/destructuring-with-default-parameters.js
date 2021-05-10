/**
 * Let's assume that `billingZipCode` is same as `deliveryZipCode`.
 * Let's assume that paymentMethod is "Net-30"
 *
 * It wouldn't make sense to set defaults for anything else, most likely.
 */
function processOrder({username, cartTotal, numOfItems, deliveryZipCode, billingZipCode = deliveryZipCode, paymentMethod = "Net-30"}) {
    // TODO: Do something with this info.
  }
  
  // Omitting `billingZipCode` - no problem.
  processOrder({cartTotal: 100.23, deliveryZipCode: 62235, numOfItems: 21, paymentMethod: "COD", username: "Narcos" })

  // This code will fail!

function add3Nums({num1 = 1, num2 = 2, num3 = 3}) {
    return num1 + num2 + num3
  }
  
  /**
   * Looks like there are defaults for all the things.
   * Can we just call it without any arguments?
   * NO!
   * `TypeError: Cannot read property 'num1' of undefined`
   *
   * If we pass nothing, then we are sending `undefined`.
   * An attempt to destructure `undefined` will fail!
   */
  add3Nums()

  // We fix the code from before

/**
 * Now, we have a default parameter for the entire object, `{}`
 * In this way we will not be destructuring `undefined`
 *
 * Instead, we will destructure from our empty object.
 * Each of the destructured parameters will just use their default value.
 */
function add3Nums({num1 = 1, num2 = 2, num3 = 3} = {}) {
    return num1 + num2 + num3
  }
  
  /**
   * Looks like there are defaults for all the things.
   * Can we just call it without any arguments?
   * NO!
   * `TypeError: Cannot read property 'num1' of undefined`
   *
   * If we pass nothing, then we are sending `undefined`.
   * An attempt to destructure `undefined` will fail!
   */
  add3Nums()