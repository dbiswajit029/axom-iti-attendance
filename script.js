function saveAttendance() {
  let date = document.getElementById("date").value;
  let name = document.getElementById("name").value;
  let designation = document.getElementById("designation").value;
  let status = document.getElementById("status").value;

  if (!date || !name) {
    alert("Please fill all fields");
    return;
  }

  let record = { date, name, designation, status };

  let data = JSON.parse(localStorage.getItem("attendance")) || [];
  data.push(record);
  localStorage.setItem("attendance", JSON.stringify(data));

  loadAttendance();
}

function loadAttendance() {
  let data = JSON.parse(localStorage.getItem("attendance")) || [];
  let table = document.getElementById("recordTable");
  table.innerHTML = "";

  data.forEach(r => {
    let row = `
      <tr>
        <td>${r.date}</td>
        <td>${r.name}</td>
        <td>${r.designation}</td>
        <td>${r.status}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

window.onload = loadAttendance;