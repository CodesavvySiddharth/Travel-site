let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn= document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menuBtn= document.querySelector('#menu-bar');
let navList= document.querySelector('.navbar');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navList.classList.toggle('active');
});

loginBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

searchBtn.addEventListener('click',() =>{
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
});

const swiper = new Swiper('.swiper',{
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:4500,
        disableOnInteraction: false,
    },
});
