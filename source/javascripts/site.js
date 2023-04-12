// This is where it all goes :)

function swapValues() {
  var from = document.getElementById("from");
  var to = document.getElementById("to");

  var temp = from.value;
  from.value = to.value;
  to.value = temp;
}

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const defaultDate = today.toISOString().split('T')[0];
  today.setFullYear(today.getFullYear() + 1);
  const oneYearFromToday = today.toISOString().split('T')[0];

  document.getElementById("date").setAttribute('max', oneYearFromToday);
  document.getElementById("date").setAttribute('value', defaultDate);
});