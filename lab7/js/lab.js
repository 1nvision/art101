// index.js - Functions
// Author: Collin Savall
// Date: 5/4/2025

// Constants

// Functions
function sortUserName()  {
    var userName = window.prompt("Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //splitting string into array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sorting the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //joining the array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;  

}

//output
document.writeln("I have now fixed your name: ", 
    sortUserName(), "</br>");