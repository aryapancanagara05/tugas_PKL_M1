
/* HAMBURGER */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
});

/* SCROLL EFFECT */
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* MODAL */
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const openModalBtn = document.getElementById("openModalBtn");

openModal.addEventListener("click", function(event) {
    modal.style.display = "flex";
});

openModalBtn.addEventListener("click", function() { 
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
