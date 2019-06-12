// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
let me = {};
me["age"] = 26;
me["current_location"] = "Sydney";
console.log(me);

// Use code to add an array of hobbies to your me object
// Use code to delete your age key
me["hobbies"] = ["guitar", "diy", "programming"];
delete me.age;
console.log(me);

// Iterate through me.hobbies and log each hobby to the screen
me.hobbies.forEach(hobby => console.log(hobby));