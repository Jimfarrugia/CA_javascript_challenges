
// Create a Dog class. Each dog should have a name and a location.
class Dog {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.walks = [];
  }
  // Add a speak method that logs "Woof! my name is {name}"
  speak = () => {
    console.log("woof");
  }
  // Add a walk method that accepts two arguments: location (string) and distance (integer)
  walk = (location, distance) => {
    this.walks.push([location, distance]);
  }
  // Add a display_walks method that console.logs all of the dog's walks
  display_walks = () => {
    this.walks.forEach(walk => console.log(walk[0], walk[1]));
  }
  // Add a total_distance method that returns the total distance of all the walks
  total_distance = () => {
    let total = 0;
    this.walks.forEach(walk => total += walk[1]);
    return total;
  }
  // Research: what's the difference between console.log and return? Make sure you have a solid understanding
}

mydog = new Dog("rover", "sydney");

mydog.walk("melbourne", 1200);
mydog.walk("adelaide", 2400);
mydog.walk("perth", 11500);

console.log(mydog.total_distance());

