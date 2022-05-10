//make button search
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        shopingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    //make button shoping cart
let shopingCart = document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () => {
        shopingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    //make button login
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shopingCart.classList.remove('active');
        navbar.classList.remove('active');
    }
    //make button menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
        searchForm.classList.remove('active');
        shopingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    //make silder product
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

//make slider review
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});