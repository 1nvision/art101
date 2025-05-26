// index.js - Loops
// Author: Collin Savall
// Date: 5/26/2025


function fizzBuzzBoom() {
    $("#output").html("");

    for (let i = 0; i <= 100; i++) {
        let str = "";

        if (i % 3 === 0) str += "Fizz";
        if (i % 5 === 0) str += "Buzz";
        if (i % 7 === 0) str += "Boom";

        let outputStr = (str !== "") ? i + " - " + str + "!" : i;

        $("#output").append("<p>" + outputStr + "</p>");
    }
}

//run the js when "run" button clicked
$(document).ready(function() {
    $("#runButton").click(function() {
        fizzBuzzBoom();
    });
});
