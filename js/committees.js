let committees = [];


fetch("../data/committees.json")

.then(response => response.json())

.then(data => {

    committees = data;

    displayCommittees(committees);

});



function displayCommittees(list){


let container = document.getElementById("committeeList");


container.innerHTML = "";



list.forEach(committee => {


let card = `

<div class="card">

<h3>

<a href="committee.html?id=${committee.id}">
${committee.name}

</a>

</h3>


<p>
<strong>Chair:</strong>
${committee.chair}
</p>


<p>
<strong>Ranking Member:</strong>
${committee.ranking}
</p>


<p>
${committee.jurisdiction}
</p>


</div>

`;


container.innerHTML += card;


});


}



document
.getElementById("committeeSearch")
.addEventListener("keyup", function(){


let search = this.value.toLowerCase();


let filtered = committees.filter(committee =>


committee.name.toLowerCase().includes(search)

||

committee.chair.toLowerCase().includes(search)

||

committee.jurisdiction.toLowerCase().includes(search)


);


displayCommittees(filtered);


});