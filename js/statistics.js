fetch("../data/statistics.json")

.then(response => response.json())

.then(data => {


document.getElementById("congress").innerHTML =
data.congress;



document.getElementById("members").innerHTML =
data.members;



document.getElementById("party").innerHTML =

"Republican: " + data.republicans +
"<br>" +

"Democrat: " + data.democrats +
"<br>" +

"Independent: " + data.independent;



document.getElementById("introduced").innerHTML =
data.billsIntroduced;



document.getElementById("passed").innerHTML =
data.billsPassed;



document.getElementById("votes").innerHTML =
data.votesHeld;



document.getElementById("committees").innerHTML =
data.committees;



});