let datum = new Date();
let year = datum.getFullYear();
document.getElementById("footer-date").innerHTML = `&copy; OTKUP MOBITELA ZAGREB - ${year}`;

function showP() {
  const x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

const endpoint = "https://api.hnb.hr/tecajn/v2";
const body = document.querySelector("body");

fetch(endpoint)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(`${Valuta}`);
  })

  .catch((error) => {
    console.log(error);
  });