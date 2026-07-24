fetch("data/homepage.json")

.then(response => response.json())

.then(data => {


document.getElementById("congress").innerHTML =
data.congress;


document.getElementById("session").innerHTML =
data.session + " | " + data.date;


});




fetch("data/announcements.json")

.then(response => response.json())

.then(data => {


let box =
document.getElementById("announcements");


data.announcements.forEach(item => {

box.innerHTML += `


<div class="card">


<h3>${item.title}</h3>


<p>

<strong>${item.date}</strong>

</p>


<p>${item.description}</p>


</div>


`;


});


});
