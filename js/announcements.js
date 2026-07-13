let announcements = [];


fetch("../data/announcements.json")

.then(response => response.json())

.then(data => {

announcements = data.announcements;

displayAnnouncements(announcements);

});




function displayAnnouncements(list){


let box =
document.getElementById("announcementList");


box.innerHTML = "";



list.forEach(item => {



box.innerHTML += `


<div class="card">


<h3>${item.title}</h3>


<p>

<strong>Date:</strong>

${item.date}

</p>



<p>

<strong>Priority:</strong>

${item.priority}

</p>



<p>

${item.description}

</p>


</div>


`;



});


}




document
.getElementById("announcementSearch")
.addEventListener("keyup", function(){


let search =
this.value.toLowerCase();



let filtered =
announcements.filter(item =>


item.title
.toLowerCase()
.includes(search)

||

item.description
.toLowerCase()
.includes(search)

||

item.priority
.toLowerCase()
.includes(search)


);



displayAnnouncements(filtered);


});
