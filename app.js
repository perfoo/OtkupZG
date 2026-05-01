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
  let scrollTicking = false;

  const syncStickyContact = () => {
    scrollTicking = false;

    if (!mobileStickyQuery.matches) {
      mobileContactBar.classList.remove("is-visible");
      return;
    }

    const actionsBox = heroActions.getBoundingClientRect();
    const actionsAreGone = actionsBox.bottom < 0;
    mobileContactBar.classList.toggle("is-visible", actionsAreGone);
  };

  const requestStickyContactSync = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(syncStickyContact);
    }
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
    window.addEventListener("scroll", requestStickyContactSync, { passive: true });
    window.addEventListener("resize", requestStickyContactSync, { passive: true });
  }

  mobileStickyQuery.addEventListener("change", () => {
    if (!mobileStickyQuery.matches) {
      mobileContactBar.classList.remove("is-visible");
      return;
    }

    requestStickyContactSync();
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

