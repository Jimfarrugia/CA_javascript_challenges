/*
Finish off the code below to create a function that will take a number as an input, and will print out the result of multiplying that number by itself.
Throw an Error when the function is called
without arguments.
*/

"use strict";

const square = (a) => {
  try {
    if (!a && a !== 0) throw new Error('Function requires an argument!');
    console.log(a * a);
  }
  catch (e) { console.log(e); }
}
square(10); // 100
square(); // BEFORE: NaN // AFTER: Error: Function square requires an argument!
square(1); // 1
square("a"); // NaN