
// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// =================================
// AUTOMATIC COPYRIGHT YEAR
// =================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// =================================
// SCROLL REVEAL ANIMATIONS
// =================================

const revealElements = document.querySelectorAll(
  ".section-heading, .about-content, .section-intro, " +
  ".design-card, .website-project, .skill-column, .contact-section"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});
