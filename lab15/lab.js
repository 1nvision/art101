// index.js - API's and AJAX
// Author: Collin Savall
// Date: 6/2/2025

$(document).ready(function() {
    $("#activate").click(function() {
        
        const pokeID = Math.floor(Math.random() * 898) + 1;
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;

        $.ajax({
            url: apiURL,
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data);
                const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                const imageURL = data.sprites.other["official-artwork"].front_default;

                $("#output").html(`
                    <h3>${name}</h3>
                    <img src="${imageURL}" alt="${name}">
                `);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
                $("#output").html("<p>Failed to load Pokémon.</p>");
            }
        });
    });
});