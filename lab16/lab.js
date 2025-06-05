// index.js - API's and AJAX
// Author: Collin Savall
// Date: 6/2/2025


$("#activate").click(function() {
  $.ajax({
    url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
      console.log("Success:", comicObj);

      // build comic
      let comicTitle = $("<h3>").text(comicObj.title);
      let comicImage = $("<img>")
        .attr("src", comicObj.img)
        .attr("alt", comicObj.alt)
        .attr("title", comicObj.alt);

      $("#output").empty().append(comicTitle, comicImage);
    },
    error: function (jqXHR, textStatus, errorThrown) {
    console.log("AJAX Error:");
    console.log("Status:", jqXHR.status);       // HTTP status code
    console.log("Text Status:", textStatus);    // 'error'
    console.log("Error Thrown:", errorThrown);  // often empty
    console.log("Full jqXHR object:", jqXHR);   // deeper look
    $("#output").text("Error loading XKCD comic.");
}
  });
});
