let params = new URLSearchParams(window.location.search);

let id = params.get("id");

fetch("../data/committees.json")
  .then(response => response.json())
  .then(data => {

    let committee = data.committees.find(c => c.id === id);

    let page = document.getElementById("committeeDetails");

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

${
committee.members && committee.members.length
? committee.members.map(member => `<li>${member}</li>`).join("")
: "<li>No committee members listed.</li>"
}

</ul>

</div>


<div class="card">

<h2>Upcoming Agenda</h2>

<ul>

${
committee.agenda && committee.agenda.length
? committee.agenda.map(item => `
<li>
<strong>${item.date}</strong><br>
${item.title}<br>
${item.location}
</li>
<br>
`).join("")
: "<li>No upcoming agenda.</li>"
}

</ul>

</div>


<div class="card">

<h2>Past Hearings</h2>

<ul>

${
committee.hearings && committee.hearings.length
? committee.hearings.map(h => `<li>${h}</li>`).join("")
: "<li>No hearings available.</li>"
}

</ul>

</div>


<div class="card">

<h2>Reports</h2>

<ul>

${
committee.reports && committee.reports.length
? committee.reports.map(r => `<li>${r}</li>`).join("")
: "<li>No reports available.</li>"
}

</ul>

</div>

`;

});
