// This is where it all goes :)

function swapValues() {
  var from = document.getElementById("from");
  var to = document.getElementById("to");

  var temp = from.value;
  from.value = to.value;
  to.value = temp;
}