"use strict";

/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 80) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
};

addEventOnElem(window, "scroll", headerActive);


document.addEventListener("DOMContentLoaded", function () {
    const instaCards = document.querySelectorAll(".insta-card img");
    const modal = document.createElement("div");
    modal.classList.add("insta-modal");
    modal.innerHTML = `<span class="close-btn">&times;</span><img src="" alt="Instagram Post">`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const closeBtn = modal.querySelector(".close-btn");

    instaCards.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            modal.classList.remove("active");
        }
    });
});
