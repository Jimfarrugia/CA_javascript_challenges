// Create a basic GUI in the browser to interact with your classes.
// Use buttons, prompts and lists to create and display dogs (view example).

// Add walks to the GUI. I.e. add a `New Walk` button to each dog and display their walks under their name.
class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
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

let addDogBtn = document.getElementById("addDogBtn");
let dogs = [];

addDogBtn.addEventListener('click', (e) => {
  let name = document.getElementById("nameField").value;
  let location = document.getElementById("locationField").value;
  let dogList = document.getElementById("dogList");
  if (!(name) || !(location)) return console.log("insufficient input");
  
  dogs.push(new Dog(name, location));
  
  dogList.innerHTML = "";
  
  dogs.forEach(dog => {
    dogList.innerHTML += `
      <p>
        <strong>Name</strong>: ${dog.name}<br>
        <strong>Location</strong>: ${dog.location}<br>
        <strong>Walks</strong>: ${dog.walks.length}
      </p>
    `;
  });
});

