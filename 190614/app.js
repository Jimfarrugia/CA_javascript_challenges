// Core:
// (1) - Object Destructuring
// Declare a fat arrow function called mult() that will multiply values of the x, y, z fields of the passed object.

//“use strict”;

var obj = {
  x: 5,
  y: 20,
  z: 3
};

const mult = obj => {
  let { x, y, z } = obj;
  return x * y * z;
};
// Or
const multValues = obj => {
  return Object.values(obj).reduce((acc, val) => acc * val);
};

console.log(mult(obj));
console.log(multValues(obj));
// 300

// (2) - Destructuring and Rest Operator
// Assign values to the a, b, c variables using destructuring and rest operator.

//“use strict”;

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

[a, b, ...c] = arr; // ...rest

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
