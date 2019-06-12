// Create a Walk class with properties: location and distance
class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
    // Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk
    this.timestamp = new Date().toUTCString();
  }
}

class Dog {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.walks = [];
  }
  speak = () => { console.log("woof"); }

  walk = (location, distance) => {
    // Update your Dog class: when the walk method is called, use this new Walk class to create a walk
    this.walks.push(new Walk(location, distance));
  }

  display_walks = () => {
    this.walks.forEach((walk, index) => {
      if (index === 0) console.log(`Walks taken by ${this.name}:`);
      console.log(`Walk ${index+1}:`);
      console.log("Location: ", walk["location"]);
      console.log("Distance: ", walk["distance"]);
      console.log("Timestamp: ", walk["timestamp"]);
    });
  }
  total_distance = () => {
    let total = 0;
    this.walks.forEach(walk => total += walk[1]);
    return total;
  }
}
mydog = new Dog("rover", "sydney");

mydog.walk("park", 300);
mydog.walk("shops", 500);
mydog.walk("quick run", 100);

mydog.display_walks();