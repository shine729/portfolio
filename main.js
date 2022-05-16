'use strict';

//네브바 투명도
var navbar = document.getElementById('navbar')
var navbarHeight = navbar.offsetHeight;
document.addEventListener('scroll',function(){
// console.log(window.scrollY)
// console.log(`navbarHeight: ${navbarHeight}`);

if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
}else{
    navbar.classList.remove('navbar--dark')
}
});

//네브바버튼누르면 열림
const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener('click',() => {
    navbarMenu.classList.toggle('open');
})

// 네브바메뉴 누를때 스크롤됨(모바일메뉴버튼)
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=> {

    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// contact버튼누르면 contact부분으로 스크롤됨
const contact = document.querySelector('.home__contact')
contact.addEventListener('click', ()=> {
scrollIntoView('#contact')
});

// 스크롤을 내렸을때 홈 투명도 조절
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤을 내렸을때 위로올라가는 버튼 보이게 설정
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
})

// 맨위로 올라가는 버튼
arrowUp.addEventListener('click',() => {
  scrollIntoView('#home')
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}