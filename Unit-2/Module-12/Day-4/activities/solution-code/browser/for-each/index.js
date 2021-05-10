const nums = [10, 20, 30, 40];
const doubledNums = [];

// For each number - callback a function.
nums.forEach((num) => {
  // This works...but function is reaching outside of its scope and mutating.
  doubledNums.push(num * 2);
});

// `forEach` returns undefined - `nums` is unchanged.
console.log(nums);

// We were forced to create another variable and mutate that with `push`
console.log(doubledNums);
