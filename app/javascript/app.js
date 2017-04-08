var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = new Date();

document.getElementById("day").innerHTML = days[date.getDay()];
document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = months[date.getMonth()];
