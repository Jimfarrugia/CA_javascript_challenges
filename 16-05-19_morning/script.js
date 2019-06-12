/********************************************************/
// Core:
// Atomic Blonde Number:
// a number is an atomic blonde number if the sum and product of its digits are equal.
// For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3).
// Write a function (maybe even in ES6??) to check if a number is an atomic blonde number or not.
/********************************************************/
const isAtomicBlonde = (num) => {
  let digits = num.toString().split('').map(e => parseInt(e, 10)); // get array of digits as integers
  let sum = digits.reduce((acc, val) => acc + val);       // get the sum of the digits
  let product = digits.reduce((acc, val) => acc * val);   // get the product of the digits
  return sum === product;                                 // return evaluation of sum === product (true or false)
}
//console.log(isAtomicBlonde(123));

/********************************************************/
// Advanced:
// Make a html script that will create a journal with a short-term memory. Weird, I know.
// Prompt a user for any content. What they did yesterday, what their favourite colour is, whatever. Store the user input in an array.
// Print out all entries in the array.

// Loop back and prompt the user for the next journal entry.
// The journal can only contain a maximum of 5 entries, but can loop forever.
const journal = (entries = []) => {
  
  let newEntry = [];

  newEntry.push(prompt("What's your name?"));
  newEntry.push(prompt("What's the date?"));
  newEntry.push(prompt("Add some text for the journal entry:"));
  
  entries.push(newEntry);

  console.log(entries);

  if (entries.length >= 5) return console.log("journal is full!");

  return journal(entries);
}
journal();

/********************************************************/
// Expert:
// Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger.

// Suppose we choose the number 8082.
// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174
// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.

// ** Bonus points for recognising what 6174 is.
/********************************************************/
const kaprekarsConstant = (num, count = 1, outputString = "") => {
  // rearrange to smallest number
  let smallestNum = parseInt(num.toString().split('').sort().join(''), 10);
  // rearange to largest number
  let largestNum = parseInt(num.toString().split('').sort().reverse().join(''), 10);
  // subtract smallest from largest
  let result = largestNum - smallestNum;
  // append output string
  outputString += `${largestNum} - ${smallestNum} = ${result}` + '\n';
  // return outputString if we're done
  if (result === 6174) return outputString + `Completed in ${count} steps!`;
  // Else loop back around
  return kaprekarsConstant(result, count+1, outputString);
}
//console.log(kaprekarsConstant(3141));