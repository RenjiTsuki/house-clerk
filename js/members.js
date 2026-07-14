let members = [];

fetch("../data/members.json")
  .then(response => response.json())
  .then(data => {

    console.log(data);

    members = data.members;

    console.log(members);

    displayMembers(members);

  });

function displayMembers(list) {

  let table = document.getElementById("memberTable");

  table.innerHTML = "";

  list.forEach(member => {

    let row = `
      <tr>
        <td><a href="member-profile.html?id=${member.id}">${member.name}</a></td>
        <td>${member.position}</td>
        <td>${member.state}</td>
        <td>${member.district}</td>
        <td>${member.party}</td>
      </tr>
    `;

    table.innerHTML += row;

  });

}
