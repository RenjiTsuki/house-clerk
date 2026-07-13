document.addEventListener("DOMContentLoaded", function(){

let path = window.location.pathname;

let prefix = path.includes("/pages/") ? "" : "pages/";

let nav = `

<nav>

<a href="${prefix}../index.html">Home</a>

<a href="${prefix}members.html">Members</a>

<a href="${prefix}bills.html">Legislation</a>

<a href="${prefix}votes.html">Votes</a>

<a href="${prefix}committees.html">Committees</a>

<a href="${prefix}journal.html">Journal</a>

<a href="${prefix}calendar.html">Calendar</a>

<a href="${prefix}search.html">Search</a>

<a href="${prefix}documents.html">Documents</a>

<a href="${prefix}announcements.html">Announcements</a>

</nav>

`;


let location =
document.getElementById("navigation");


if(location){

location.innerHTML = nav;

}

});