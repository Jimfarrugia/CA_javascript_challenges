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

// BEAST MODE:

// Add another item to the end of the hobbies array
me.hobbies.push("motorcycles");

// Delete the first item in the hobbies array
me.hobbies.shift([0]);

// Add a mother key, set its value to an empty object
me.mother = {};

// Add name, age and location keys to the mother object
me.mother.name = "Kim";
me.mother.age = 55;
me.mother.location = "Sydney";

// Add a print_details function to the me object.
me = {
  print_details: function() {
    Object.keys(this).forEach(key => {
      if (key !== "print_details") console.log(key, this[key]);
    });
  },
  ...me
};

// Call the function to log some details about yourself. I.e. me.print_details() should work
me.print_details();
me.print_details;

// Note the difference between calling me.print_details and me.print_details()