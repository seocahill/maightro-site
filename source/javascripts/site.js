// This is where it all goes :)

function swapValues() {
  var from = document.getElementById("from");
  var to = document.getElementById("to");

  var temp = from.value;
  from.value = to.value;
  to.value = temp;
}

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("date").setAttribute('max', today);
  document.getElementById("date").setAttribute('value', today);
});