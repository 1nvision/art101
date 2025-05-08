// index.js - Anon Functions and Callbacks
// Author: Collin Savall
// Date: 5/8/2025



function mathStuff(x){
     return (x % 2 == 0);
}

console.log("Is 1 even? ",mathStuff(1));
 console.log("Is 2 even?", mathStuff(2));

array = [200, 433, 14, 127, 1000, 42] 

console.log("My array", array);

var result = array.map(mathStuff);
// should return [true, false, true, false, true, true]

console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", result);

