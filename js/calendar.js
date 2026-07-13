let events = [];


fetch("../data/calendar.json")

.then(response => response.json())

.then(data => {

    events = data;

    displayEvents(events);

});



function displayEvents(list){


let container = document.getElementById("calendarEvents");


container.innerHTML = "";



list.forEach(event => {


let card = `

<div class="card">


<h3>
${event.event}
</h3>


<p>
<strong>Date:</strong>
${event.date}
</p>


<p>
<strong>Time:</strong>
${event.time}
</p>


<p>
<strong>Location:</strong>
${event.location}
</p>


<p>
${event.description}
</p>


</div>

`;


container.innerHTML += card;


});


}



document
.getElementById("calendarSearch")
.addEventListener("keyup", function(){


let search = this.value.toLowerCase();


let filtered = events.filter(event =>


event.event.toLowerCase().includes(search)

||

event.location.toLowerCase().includes(search)

||

event.date.includes(search)


);


displayEvents(filtered);


});
