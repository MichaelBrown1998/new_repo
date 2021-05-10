const nums = [10, 20, 30, 40, 8, 5, 5, 2];
const calculatedNums = [];


// someArray.forEach(someFunction)

const theResult = nums.forEach(num => calculatedNums.push(num*2-6))

console.log(theResult);
console.log(calculatedNums);

