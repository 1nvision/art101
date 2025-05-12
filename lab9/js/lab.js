// index.js - Libraries and jQuery
// Author: Collin Savall
// Date: 5/12/2025


$(document).ready(function() {

    $("#challenge").append("<button id= 'button-challenge'> Make Special</button>");
    $("#problems").append("<button id= 'button-problems'> Make Special</button>");
    $("#results").append("<button id= 'button-results'> Make Special</button>");
    
//click listener
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });    

    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });

});