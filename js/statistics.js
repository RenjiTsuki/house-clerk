fetch("../data/statistics.json")

.then(response => response.json())

.then(data => {


document.getElementById("congress").innerHTML =
data.congress;



document.getElementById("members").innerHTML =
data.members;



document.getElementById("party").innerHTML =

"Reform: " + data.reformers +
"<br>" +

"Progressive: " + data.progressives +
"<br>" +

"Farmer-Labor: " + data.farmerlabor;



document.getElementById("introduced").innerHTML =
data.billsIntroduced;



document.getElementById("passed").innerHTML =
data.billsPassed;



document.getElementById("votes").innerHTML =
data.votesHeld;



document.getElementById("committees").innerHTML =
data.committees;



});
