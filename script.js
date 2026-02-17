'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header=document.querySelector(".header");

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message=document.createElement("div");
message.classList.add("cookie-message");
// message.textContent='We use cookied for improved functionality and analytics';
message.innerHTML='We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!<button>'

// header.prepend(message);
header.append(message);
document.querySelector(".btn--close-cookie").addEventListener("click",function(){
  message.remove();
  // message.parentElement.removeChild(message);
})

const btnScroll=document.querySelector(".btn--scroll-to");
const section1=document.querySelector("#section--1");
btnScroll.addEventListener("click",function(e){
  const sectioncoords=section1.getBoundingClientRect();
  console.log(sectioncoords);
  console.log("Current X/Y",window.pageXOffset,pageYOffset);
  console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);
  // window.scrollTo(sectioncoords.left+window.pageXOffset,sectioncoords.top+window.pageYOffset);

  //Scrolling
  // window.scrollTo({
  //   left:sectioncoords.left+window.pageXOffset,
  //   top:sectioncoords.top+window.pageYOffset, 
  //   behavior:'smooth',
  // })

  section1.scrollIntoView({behavior:'smooth'});
})

const randomInt=(min,max)=>{
 return Math.floor(Math.random()*(max-min+1)+min);
}
const randomColor=()=>{
  return `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
}

// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log("LINK",e.target,e.currentTarget);

//   //Stop propagation
//   // e.stopPropagation(); 
// }
// );

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//    console.log("CONAINER",e.target,e.currentTarget);
// })

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//    console.log("NAV",e.target,e.currentTarget);
// },true);

////////////////////////////////////////////


//Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener("click",function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })

document.querySelector('.nav__links').addEventListener("click",function(e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    });
  }
})

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click",function(e){
  // console.log(e.target.closest('.operations__tab'));
  const clicked=e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard Clause
  if(!clicked) return;

  //remove active classes
  tabs.forEach(tab=>tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=>c.classList.remove("operations__content--active"));

  //Active tab
  clicked.classList.add('operations__tab--active');

  //Active content
  // console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//Menu fade animation
const nav=document.querySelector(".nav");


function handleHover(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    // console.log(link);
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');

    siblings.forEach(el=>{
      if(el!==link) el.style.opacity=this;
    });
    logo.style.opacity=this;
  }
}

// nav.addEventListener('mouseover',function(e){
//  handleHover(e,0.5);
// });

nav.addEventListener('mouseover',handleHover.bind(0.5));

// nav.addEventListener('mouseout',function(e){
// handleHover(e,1);
// });
nav.addEventListener('mouseout',handleHover.bind(1));





//DOM traversing
const h1=document.querySelector('h1');

//Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// h1.firstElementChild.style.color="white";
// h1.lastElementChild.style.color="orangered";

//Going Upward: parent
// console.log(h1.parentNode);
// console.log(h1.closest('.header'));
// h1.closest('.header').style.background='var(--gradient-primary)';