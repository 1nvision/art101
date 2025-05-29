// index.js - Functions
// Author: Collin Savall
// Date: 5/4/2025

// Constants


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function processUserName(name) {
    let cleanName = name.replace(/\s+/g, '').toLowerCase();

    let nameArray = cleanName.split('');
    let shuffledArray = shuffleArray(nameArray);

    let shuffledName = shuffledArray.join('');
    return capitalize(shuffledName);
}

$(document).ready(function () {
    const userName = window.prompt("Please tell me your name so I can fix it.");
    
    if (userName) {
        const fixedName = processUserName(userName);

        $("#output").html(`<div class="name-output">Your name is now fixed and perfect: ${fixedName}</div>`);
    } else {
        $("#output").html(`<div class="name-output">You didn't enter a name!</div>`);
    }
});
