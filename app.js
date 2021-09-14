let datum = new Date();
let year = datum.getFullYear();

document.getElementById("footer-date").innerHTML = `&copy; OTKUP MOBITELA ZAGREB - ${year}`;

function showP() {
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 