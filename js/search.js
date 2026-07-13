let records = [];


Promise.all([

fetch("../data/members.json")
.then(response => response.json()),


fetch("../data/bills.json")
.then(response => response.json()),


fetch("../data/votes.json")
.then(response => response.json()),


fetch("../data/committees.json")
.then(response => response.json())


])


.then(data => {


let members = data[0];
let bills = data[1];
let votes = data[2];
let committees = data[3];



records = [

...members.map(item => ({

type:"Member",

title:item.name,

info:item.state + " - " + item.party

})),



...bills.map(item => ({

type:"Bill",

title:item.number,

info:item.title

})),



...votes.map(item => ({

type:"Vote",

title:item.roll,

info:item.question

})),



...committees.map(item => ({

type:"Committee",

title:item.name,

info:item.jurisdiction

}))


];


});





document
.getElementById("globalSearch")
.addEventListener("keyup", function(){



let search =
this.value.toLowerCase();



let results =
document.getElementById("results");



results.innerHTML = "";



if(search.length < 2){

return;

}



let filtered =
records.filter(record =>


record.title
.toLowerCase()
.includes(search)

||

record.info
.toLowerCase()
.includes(search)


);



filtered.forEach(record => {



results.innerHTML += `


<div class="card">


<h3>${record.type}</h3>


<p>
<strong>${record.title}</strong>
</p>


<p>
${record.info}
</p>


</div>


`;


});


});
