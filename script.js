const navToggle = document.querySelectorAll(".nav-toggle");
const navList = document.querySelector(".nav-list");
const cards = document.querySelectorAll(".collection-cards .card");

navToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    navList.classList.toggle("inactive");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const activeCard = document.querySelector(".collection-cards .card.active");
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove("active"); // Corrected from activePanel to activeCard
    }
    card.classList.add("active"); // Corrected from panel to card
  });
});
