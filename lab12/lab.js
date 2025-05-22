// index.js - Conditionals
// Author: Collin Savall
// Date: 5/22/2025

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
//Attributions: House descriptions are based off of this website: 
//https://www.harrypotter.com/news/discover-your-hogwarts-house-on-wizarding-world

    if (mod === 0) {
        return "Gryffindor: you're the type of person who likes to stand up for the little guy, challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously";
    } else if (mod === 1) {
        return "Ravenclaw: you're the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks";
    } else if (mod === 2) {
        return "Hufflepuff: you're the type of person who analyses everything, is an overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts";
    } else {
        return "Slytherin: you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you're the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn't let anyone see their soft side";
    }
}

$("#button").click(function () {
    let name = $("#input").val();
    let house = sortingHat(name);
    $("#output").append("<p class='result'>The Sorting Hat has sorted you into " + house + "!</p>");
});
