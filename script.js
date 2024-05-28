const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle('open');
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content .section-subheader", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".feature-card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".music-image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".music-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".music-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".music-content .music-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0
});
