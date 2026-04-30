let datum = new Date();
let year = datum.getFullYear();
document.getElementById("footer-date").innerHTML = `&copy; OTKUP MOBITELA ZAGREB - ${year}`;

const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteMenu.classList.toggle("is-open", !isOpen);
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteMenu.classList.remove("is-open");
    }
  });
}

function showP() {
  const x = document.getElementById("hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

