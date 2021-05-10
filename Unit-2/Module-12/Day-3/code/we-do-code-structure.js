/**
 * `nums` and `nums2` are GLOBALLY SCOPED VARIABLES.
 * They can be accessed anywhere in our code.
 */
const nums = [1, 2, 3];
const nums2 = [4, 5, 6];

/**
 * Variable shadowing - NO!
 * Just replace `nums` parameter name with something else - how about `numbers`?
 */
function sumAnArray(nums) {
  /**
   * `nums` is SCOPED inside of this FUNCTION BODY.
   * It is completely independent of `nums`.
   *
   * Again, best is to use different names for
   * FUNCTIONALLY SCOPED PARAMETERS and any GLOBAL VARIABLES.
}

/**
 * `nums2` would be assigned to the SCOPED PARAMETER `nums` during the INVOCATION of the fxn.
 * Although this would work, it leads to unnecessarily confusing and provides little benefit.
 */
sumAnArray(nums2);