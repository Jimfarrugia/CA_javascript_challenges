// Core:
// (1) Values from Object
// Return all the values from an objects properties using two different loops
const values = (object) => {
  let result = [];
  for (prop in object) result.push(object[prop]);
  return result;
}
console.log(values({name: "G-money", age: "Good question", hobbies: "everything"}));
// i.e. values({name: "G-money", age: "Good question", hobbies: "everything"})
//  ["G-money", "Good question", "everything"]

// (2) Pokies
// Create a function that takes an array (of length 4) as input
// If the array contains the same 4 elements, the user wins
// The amount they win depends on the length of the individual elements ($10 * the length)
const winnerWinner = (array) => {
  let win = (array.length === array.filter(e => e === array[0]).length) ? true : false;
  return win ? `Congrats, you won $${array[0].length * 10}` : "Unlucky, no win here.";
}
console.log(winnerWinner(["ab", "ab", "ab", "ab"]));//=> "Congratulations, you won $20"
console.log(winnerWinner(["Ab", "2b", "ab", "ab"]));//=> "Unlucky, no win here"
console.log(winnerWinner(["rt2e", "rt2e", "rt2e", "rt2e"]));//=> "Congratulations, you won $40"

// Advanced:
// (3) Middle Character
// Create a function that takes a string as input, and returns its middle character
// If the string's length is an even number, return the middle 2 characters

const middleCharacter = (string) => {
  let remainder = (string.length % 2);
  let middleIndex = Math.floor(string.length / 2);
  if (remainder) return string[middleIndex];
  return `${string[middleIndex-1]}${string[middleIndex]}`;
}
console.log(middleCharacter("testing")); //=> "t"
console.log(middleCharacter("middleCharacters")); // => "ha"
console.log(middleCharacter("A")); //=> "A"

// (4) Using break
// Create a function that takes an array of Numbers as input
// Using your favourite loop, multiply each element of the array by 3
// Halt the loop if multiplying an element by 3 leads to a result that is greater than 100, and print the element and index
// If there are no matches, let the user know

const breakItUp = (array) => {
  try {
    array.forEach((num, index) => {
      if (num * 3 > 100) throw `Loop stopped on index ${index}, which was ${num}`;
    });
    return "No calculation was greater than 100.";
  }
  catch (e) { return e; }
}
console.log(breakItUp([32,33,34,35]));
console.log(breakItUp([20,25,30,35,40,45])); //=> "Loop stopped on index 3, which was 35"
console.log(breakItUp([6,1,19,28,0])); //=> "No calculation was greater than 100"
console.log(breakItUp([50,23,2,43])); //=> "Loop stopped on index 0, which was 50"

// (5) Using Continue
// Create a function that will take an array of Numbers as input
// It should print "${Number} is odd" for odd numbers and should skip over even numbers (think of 'continue')

const carryOn = (array) => {
  for (i=0; i < array.length; i++) {
    if (!(array[i] % 2)) continue;
    console.log(`${array[i]} is odd`)
  }
}
carryOn([6,1,19,28,0]);
// "1 is odd"
// "19 is odd"
carryOn([1,2,3,4,5]);
// "1 is odd"
// "3 is odd"
// "5 is odd"

// Expert
// (6) Marking time
// The marks from the rails assignment are in
// Hamish has entered all the marks as an array, and now needs to count how many "HD", "D", "C", "P" (Cause hopefully there will be no "F") there are
// Create a function to help Hamish
// It should take an array of scores, and return an object of these scores counted
// If there were no scores of a particular mark, that mark should still appear with a 0 attached

const railsMarks = (array) => {
  let marks = { "HD": 0, "D": 0, "C": 0, "P": 0 };
  array.forEach(mark => {
    switch (mark) {
      case "HD":
        marks["HD"] += 1;
        break;
      case "D":
        marks["D"] += 1;
        break;
      case "C":
        marks["C"] += 1;
        break;
      case "P":
        marks["P"] += 1;
        break;
    }
  });
  return marks;
}
console.log(railsMarks(["HD","D","D","C","D","C","C","HD","P","D"])); //=> {HD: 2, D : 4, C: 3, P: 1}
console.log(railsMarks(["D","D","D","D","D","D","D","D","P","D","D","D","D","D"])); //=> {HD: 0, D : 13, C: 0, P: 1}
