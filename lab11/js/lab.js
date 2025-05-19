// index.js - JavaScript Events and Forms
// Author: Collin Savall
// Date: 5/19/2025



function sortString(inputString) {
  return inputString.split('').sort().join('');
}

$(document).ready(function() {
  // Click listener for button
  $("#submit").click(function() {
    const userName = $("#user-name").val();

    // Sort the user's name
    const userNameSorted = sortString(userName);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
});
