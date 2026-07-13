let members = [];


fetch("../data/members.json")

.then(response => response.json())

.then(data => {

members = data;

displayMembers(members);

});



function displayMembers(list){


let table = document.getElementById("memberTable");


table.innerHTML = "";


list.forEach(member => {


let row = `

<tr>

<td>${member.name}</td>

<td>${member.state}</td>

<td>${member.district}</td>

<td>${member.party}</td>

</tr>

`;


table.innerHTML += row;


});


}



document
.getElementById("search")
.addEventListener("keyup", function(){


let value = this.value.toLowerCase();


let filtered = members.filter(member =>

member.name.toLowerCase().includes(value)
||
member.state.toLowerCase().includes(value)
||
member.party.toLowerCase().includes(value)

);


displayMembers(filtered);


});
