const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive')
  }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } 

  aside.classList.toggle('inactive');
}

 
/* 
menuEmail.addEventListener('click', () => toogleElement(desktopMenu));
menuHamIcon.addEventListener('click', () => toogleElement(mobileMenu));

function toogleElement(elemento) {
  elemento.classList.toggle('inactive');
}

 */

/* menuEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};
 */

/* const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu'); */