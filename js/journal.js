let journals = [];

fetch("../data/journal.json")
  .then(response => response.json())
  .then(data => {

    journals = data.entries;

    displayJournal(journals);

});



function displayJournal(list){


let container = document.getElementById("journalEntries");


container.innerHTML = "";



list.forEach(entry => {


let card = `

<div class="card">


<h3>
${entry.day}, ${entry.date}
</h3>


<p>
<strong>Meeting:</strong>
${entry.meeting}
</p>


<p>
<strong>Prayer:</strong>
${entry.prayer}
</p>


<p>
<strong>Pledge:</strong>
${entry.pledge}
</p>



<p>
<strong>Business Conducted:</strong>
</p>


<ul>

${(entry.business || []).map(item =>

`<li>${item}</li>`

).join("")}

</ul>



<p>
<strong>Adjournment:</strong>
${entry.adjournment}
</p>


</div>

`;


container.innerHTML += card;


});


}



document
.getElementById("journalSearch")
.addEventListener("keyup", function(){


let search = this.value.toLowerCase();


let filtered = journals.filter(entry =>

entry.date.includes(search)

||
entry.day.toLowerCase().includes(search)

);


displayJournal(filtered);


});
