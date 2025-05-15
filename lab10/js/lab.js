// index.js - Libraries and jQuery
// Author: Collin Savall
// Date: 5/12/2025


function generateRandomText() {
    const text = "This is random text that is being generated and I am unsure if I should use Lorem ipsum or just type out whatever I want to type out."
    const min = 3
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

$(document).ready(function() {
    // click listener for button
    $("#make-convo").click(function(){
      // get new fake dialogue
      const newText = generateRandomText();
      // append a new div to our output div
      $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });
  });
