var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var date = new Date();

document.getElementById("day").innerHTML = days[date.getDay()];
document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = months[date.getMonth()];


// document.getElementById("day").innerHTML = days[date.getDay()];
