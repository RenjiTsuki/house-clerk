let documents = [];


fetch("../data/documents.json")

.then(response => response.json())

.then(data => {

documents = data.documents;

displayDocuments(documents);

});



function displayDocuments(list){


let box =
document.getElementById("documents");


box.innerHTML = "";



list.forEach(document => {


box.innerHTML += `


<div class="card">


<h3>

${document.title}

</h3>


<p>

<strong>Category:</strong>

${document.category}

</p>


<p>

<strong>Date:</strong>

${document.date}

</p>


<p>

${document.description}

</p>


<button onclick="window.open('${doc.link}', '_blank')">
    View Document
</button>


</div>


`;


});


}



document
.getElementById("documentSearch")
.addEventListener("keyup", function(){


let search =
this.value.toLowerCase();



let filtered =
documents.filter(document =>


document.title
.toLowerCase()
.includes(search)

||

document.category
.toLowerCase()
.includes(search)

);



displayDocuments(filtered);


});
