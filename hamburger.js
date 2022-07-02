"use strict";


const buttonHamburger = document.querySelector(`.hamburger`);
const navbarLinks = document.querySelector(`.navbar-links`);
const buttonHome = document.querySelector(`#home`);
const buttonAbout = document.querySelector(`#about`);
const buttonService = document.querySelector(`#service`);
const buttonPortfolio = document.querySelector(`#portfolio`);


buttonHamburger.addEventListener(`click`, () =>{
    navbarLinks.classList.toggle(`active`);
});

buttonHome.addEventListener(`click`, () =>{
    navbarLinks.classList.toggle(`active`);
});

buttonAbout.addEventListener(`click`, () =>{
    navbarLinks.classList.toggle(`active`);
});

buttonPortfolio.addEventListener(`click`, () =>{
    navbarLinks.classList.toggle(`active`);
});

buttonService.addEventListener(`click`, () =>{
    navbarLinks.classList.toggle(`active`);
});