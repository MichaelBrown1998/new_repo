const nums = [4, 1, 6, 5, 7, 3, 5, 1, 7, 8];

function sumAnArray(arr) {
  let ret = null;

  for (let index = 0; index < arr.length; index++) {
    ret += arr[index]
  }

  return ret;
}