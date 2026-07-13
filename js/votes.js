let votes = [];


fetch("../data/votes.json")

.then(response => response.json())

.then(data => {

    votes = data;
    displayVotes(votes);

});



function displayVotes(list){


let table = document.getElementById("voteTable");


table.innerHTML = "";


list.forEach(vote => {


let row = `

<tr>

<td>${vote.roll}</td>

<td>${vote.date}</td>

<td>${vote.question}</td>

<td>${vote.result}</td>

</tr>

`;


table.innerHTML += row;


});


}



document
.getElementById("voteSearch")
.addEventListener("keyup", function(){


let search = this.value.toLowerCase();


let filtered = votes.filter(vote =>


vote.roll.toLowerCase().includes(search)

||

vote.question.toLowerCase().includes(search)

||

vote.result.toLowerCase().includes(search)


);


displayVotes(filtered);


});
