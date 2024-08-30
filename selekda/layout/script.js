"use strict";

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// URL for BLOG
document.addEventListener("DOMContentLoaded", function () {
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const url = card.getAttribute("data-url");

      if (url) {
        window.location.href = url;
      }
    });
  });
});

// Comment Action
document
  .querySelector(".publish-date.human")
  .addEventListener("click", function () {
    const commentSection = document.querySelector(".comments");
    if (
      commentSection.style.opacity === "0" ||
      commentSection.style.visibility === "hidden"
    ) {
      commentSection.style.opacity = "1";
      commentSection.style.visibility = "visible";
    } else {
      commentSection.style.opacity = "0";
      commentSection.style.visibility = "hidden";
    }
  });

document.querySelector("#res").addEventListener("click", function () {
  const commentSection = document.querySelector(".comments");
  if (
    commentSection.style.opacity === "0" ||
    commentSection.style.visibility === "hidden"
  ) {
    commentSection.style.opacity = "1";
    commentSection.style.visibility = "visible";
  } else {
    commentSection.style.opacity = "0";
    commentSection.style.visibility = "hidden";
  }
});

// Input Action 
const inputField = document.querySelector('.comments-input .input');
const commentsButton = document.querySelector('.comments-button');
const cancelButton = document.querySelector(".comments-button a:first-child");

inputField.addEventListener('focus', () => {
  commentsButton.style.display = 'flex';
  commentsButton.style.justifyContent = 'flex-end';
  commentsButton.style.gap = "1rem";
});

// Menambahkan event listener untuk blur pada input
inputField.addEventListener('blur', () => {
  // Mengatur delay untuk menunggu klik tombol sebelum menyembunyikan
  setTimeout(() => {
    commentsButton.style.display = 'none';
  }, 200);
});

cancelButton.addEventListener("click", () => {
  commentsButton.style.display = "none";
  inputField.value = "";
});


