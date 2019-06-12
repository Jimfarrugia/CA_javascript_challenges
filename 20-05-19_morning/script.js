// ATMs allow for 4 or 6 digit pins - entirely made up of numbers. 
// Write a function that will take a string as input, and will check the validity of a pin number

const validPin = (pin) => {
  if (pin.length < 4 || pin.length > 6) return false;
  let regex = new RegExp('^[0-9]+$');
  return regex.test(pin);
};

console.log(validPin("1234"));    // true
console.log(validPin("1a34"));    // false
console.log(validPin(""));        // false
console.log(validPin("123456"));  // true