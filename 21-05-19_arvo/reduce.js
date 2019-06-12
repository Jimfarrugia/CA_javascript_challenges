// Create a function that takes an array as input, and will return an array of the accumulating sum

const accumulatingArray = (arr) => {
  let result = [];

  arr.forEach((e, i) => {
    if (i === 0) return result.push(e);
    if (i < arr.length) return result.push(arr[i] + result[i-1]);
  });
  
  return console.log(result);
}

accumulatingArray([1, 2, 3, 4]); // [1, 3, 6, 10]

accumulatingArray([7, 2, 4]); // [7, 9, 13]

accumulatingArray([ ]); // [ ]