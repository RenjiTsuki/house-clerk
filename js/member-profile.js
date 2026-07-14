let params =
new URLSearchParams(window.location.search);


let id =
params.get("id");



fetch("../data/members.json")

.then(response => response.json())

.then(data => {


let member = data.members.find(person => person.id === id);



let profile =
document.getElementById("profile");



profile.innerHTML = `


<div class="card">

<h2>${member.name}</h2>


<p>
<strong>Position:</strong>
${member.position}
</p>


<p>
<strong>Party:</strong>
${member.party}
</p>


<p>
<strong>State:</strong>
${member.state}
</p>


<p>
<strong>District:</strong>
${member.district}
</p>


</div>



<div class="card">

<h2>Committee Assignments</h2>


<ul>

${member.committees.map(c =>

`<li>${c}</li>`

).join("")}

</ul>


</div>



<div class="card">

<h2>Roll Call Voting Record</h2>


<table>

<tr>

<th>Vote</th>
<th>Bill</th>
<th>Position</th>

</tr>


${member.votes.map(v =>


`

<tr>

<td>

<a href="vote.html?id=${v.id}">
${v.roll}
</a>

</td>


<td>${v.bill}</td>


<td>${v.vote}</td>


</tr>

`

).join("")}


</table>


</div>


`;


});
