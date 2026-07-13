let params =
new URLSearchParams(window.location.search);


let id =
params.get("id");



fetch("../data/committees.json")

.then(response => response.json())

.then(data => {


let data = data.committees.find(c => c.id === id);



let page =
document.getElementById("committeeDetails");



page.innerHTML = `


<div class="card">

<h2>${committee.name}</h2>


<p>
<strong>Chair:</strong>
${committee.chair}
</p>


<p>
<strong>Ranking Member:</strong>
${committee.ranking}
</p>


<p>
<strong>Jurisdiction:</strong>
${committee.jurisdiction}
</p>


</div>




<div class="card">

<h2>Committee Members</h2>

<ul>

${committee.members.map(member =>

`<li>${member}</li>`

).join("")}

</ul>

</div>





<div class="card">

<h2>Upcoming Agenda</h2>


<ul>

${committee.agenda.map(item =>


`

<li>

<strong>${item.date}</strong>

<br>

${item.title}

<br>

${item.location}

</li>

<br>

`

).join("")}


</ul>


</div>





<div class="card">

<h2>Past Hearings</h2>


<ul>

${committee.hearings.map(h =>

`<li>${h}</li>`

).join("")}

</ul>


</div>





<div class="card">

<h2>Reports</h2>


<ul>

${committee.reports.map(r =>

`<li>${r}</li>`

).join("")}

</ul>


</div>


`;


});
