// main.js

document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("done");
  btn.addEventListener("click", addRow);

  var complete = document.getElementById("complete");
  complete.addEventListener("click", showAlert);
});

function addRow() {
  var work = document.getElementById("work").value;
  var timeFrom = document.getElementById("timeFrom").value;
  var timeTo = document.getElementById("timeTo").value;

  if (!work || !timeFrom || !timeTo) {
    alert("Please fill in all fields!");
    return;
  }

  var myTable = document.getElementById("mytable");
  var newRow = myTable.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.textContent = timeFrom;
  cell2.textContent = timeTo;
  cell3.textContent = work;

  document.getElementById("work").value = "";
  document.getElementById("timeFrom").value = "";
  document.getElementById("timeTo").value = "";
}

function showAlert() {
  alert("Great! Take a screenshot of your Time Table and follow it. Best of luck!");
}
