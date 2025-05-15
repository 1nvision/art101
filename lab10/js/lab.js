// index.js - JavaScript for the Web
// Author: Collin Savall
// Date: 5/15/2025


function generateRandomText() {
    const text = "This is random text that is being generated and I am unsure if I should use Lorem ipsum or just type out whatever I want to type out."
    const min = 3
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random Lorem Ipsum-like text
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
