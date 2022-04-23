//Gets the year for footer
const d = new Date();
let year = d.getFullYear();
document.getElementsById("year").innerHTML = year;

//Gets date and time for last update
const date = new Date("2015-03-25");
let day = date.getDate();
document.getElementById("update").innerHTML = day;
