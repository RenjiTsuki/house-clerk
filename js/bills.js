let bills = [];

fetch("../data/bills.json")
  .then(response => response.json())
  .then(data => {

    bills = data.bills;
    displayBills(bills);

  });

function displayBills(list) {

  let table = document.getElementById("billTable");

  table.innerHTML = "";

  list.forEach(bill => {

    let row = `

<tr>

<td>${bill.number}</td>

<td>${bill.title}</td>

<td>${bill.sponsor}</td>

<td>${bill.party}</th>

<td>${bill.status}</td>

<td>${bill.date}</td>

<td>

<button onclick="window.open('${bill.document}', '_blank')">
    View Document
</button>

</td>
</tr>

`;

    table.innerHTML += row;

  });

}

document
  .getElementById("billSearch")
  .addEventListener("keyup", function () {

    let search = this.value.toLowerCase();

    let filtered = bills.filter(bill =>

      bill.number.toLowerCase().includes(search)

      ||

      bill.title.toLowerCase().includes(search)

      ||

      bill.sponsor.toLowerCase().includes(search)

      ||

      bill.status.toLowerCase().includes(search)

    );

    displayBills(filtered);

  });
