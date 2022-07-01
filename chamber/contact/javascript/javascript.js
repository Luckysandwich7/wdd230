/* copyright date
date last edited*/
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date(document.lastModified);
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fullDateMod = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// using getElementById
document.querySelector("#dateMod").textContent = fullDateMod;
// ****************************

document.querySelector('#copyDate').textContent = year;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const datefield = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${currentdate}`;

/* Banner dispaly on Monday and Tuesday*/
var weekday = new Array(7);
weekday [0] = 'Sunday';
weekday [1] = 'Monday';
weekday [2] = 'Tuesday';
weekday [3] = 'Wednesday';
weekday [4] = 'Thursday';
weekday [5] = 'Friday';
weekday [6] = 'Saturday';

var currentDate = new Date();
weekdayValue = currentDate.getDay();

if (weekdayValue > 0 < 3) {
	document.getElementById("banner").innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}