'use strict';
//zarzadzanie hamburgerem
const navList = document.querySelector('.nav__buttons');
const hamburgerMenu = document.querySelector('.nav__hamburger');
//console.log(navList);
//console.log(hamburgerMenu);
hamburgerMenu.addEventListener('click',function (){
    navList.classList.toggle('nav__buttons--active');
    hamburgerMenu.classList.toggle('nav__hamburger--active')
})
/*
po nacisnieciu hamburgera pojawia sie menu w wersji mobilnej
oraz x do zamkn iecia menu
 */
