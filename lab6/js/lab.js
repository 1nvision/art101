// index.js - JavaScript and Arrays
// Author: Collin Savall
// Date: 4/28/2025

// Constants
myTransport = ["Toyota CH-R", " Zip Car", " walking", " Bus", " Bike"]

// Functions
myMainRide = {
  make: "Toyota",
  model: "C-HR",
  color: "Black",
  year: 2018,
//function for the age of the car
  age: function() {
      return 2025 - this.year;
  }
}

//output of code
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
