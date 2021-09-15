let datum = new Date();
let year = datum.getFullYear();
document.getElementById("footer-date").innerHTML = `&copy; OTKUP MOBITELA ZAGREB - ${year}`;

function showP() {
  const x = document.getElementById("hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

