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

const heroActions = document.querySelector(".hero-actions");
const mobileContactBar = document.querySelector(".mobile-contact-bar");
const mobileStickyQuery = window.matchMedia("(max-width: 760px)");

if (heroActions && mobileContactBar) {
  const syncStickyContact = () => {
    if (!mobileStickyQuery.matches) {
      mobileContactBar.classList.remove("is-visible");
      return;
    }

    const actionsBox = heroActions.getBoundingClientRect();
    const actionsAreGone = actionsBox.bottom < 0;
    mobileContactBar.classList.toggle("is-visible", actionsAreGone);
  };

  if ("IntersectionObserver" in window) {
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        if (!mobileStickyQuery.matches) {
          mobileContactBar.classList.remove("is-visible");
          return;
        }

        mobileContactBar.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { threshold: 0 }
    );

    stickyObserver.observe(heroActions);
  } else {
    window.addEventListener("scroll", syncStickyContact, { passive: true });
  }

  mobileStickyQuery.addEventListener("change", syncStickyContact);
  syncStickyContact();
}

function showP() {
  const x = document.getElementById("hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

