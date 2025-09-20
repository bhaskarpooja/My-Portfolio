import "../css/tailwind.css";
var typed = new Typed(".typing", {
  strings: ["", "FullStack Developer", "Java Developer", "Software Developer"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink(id) {
    navLinks.forEach((link) => {
      link.classList.remove("font-bold");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("font-bold");
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateNavLink(entry.target.id);
        }
      });
    },
    { threshold: 0.5 },
  );

  sections.forEach((section) => observer.observe(section));
});
