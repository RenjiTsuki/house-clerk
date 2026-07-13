let params =
new URLSearchParams(window.location.search);


let id =
params.get("id");



fetch("../data/votes.json")

.then(response => response.json())

.then(data => {

let vote = data.votes.find(v => v.id === id);



let page =
document.getElementById("voteDetails");



page.innerHTML = `


<div class="card">

<h2>${vote.roll}</h2>


<p>
<strong>Date:</strong>
${vote.date}
</p>


<p>
<strong>Question:</strong>
${vote.question}
</p>


<p>
<strong>Bill:</strong>
${vote.bill}
</p>


<h3>
Result: ${vote.result}
</h3>


<p>

Yea: ${vote.yea}
<br>

Nay: ${vote.nay}
<br>

Present: ${vote.present}
<br>

Not Voting: ${vote.notVoting}

</p>


</div>



<div class="card">

<h2>Member Votes</h2>


<table>

<tr>

<th>Name</th>
<th>Party</th>
<th>Vote</th>

</tr>


${vote.members.map(member =>

`

<tr>

<td>${member.name}</td>

<td>${member.party}</td>

<td>${member.vote}</td>

</tr>

`

).join("")}


</table>


</div>


`;


});
