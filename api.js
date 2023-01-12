
const linkk = document.querySelectorAll(".links a")
const sec = document.querySelectorAll("section")

function navbarScroll(){
    let len = sec.length;
    while(--len && window.scrollY + 200 < sec[len].offsetTop){}
    linkk.forEach(linkk => linkk.classList.remove("active"));
    linkk[len].classList.add("active")
}
navbarScroll()
window.addEventListener("scroll", navbarScroll)



// Navigetion Bar Scroll
window.addEventListener("scroll", ()=>{
    let menu = document.querySelector("#navbar");
    menu.classList.toggle("sticky", window.scrollY > 100)
})

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  // Portfolio page 

let btnss = document.querySelectorAll(".portfolio-page .card .icon .btn")

function blackScrenAdd (){
  let page = document.querySelector(".portfolio-page .black-scren");
  page.classList.toggle("animate")
}

function blackScrenRemove (){
  let page = document.querySelector(".portfolio-page .black-scren");
  page.classList.remove("animate")
}

btnss.forEach((item, index)=>{
  item.addEventListener("click", ()=>{
    blackScrenAdd()
  })
})

document.querySelector(".portfolio-page .black-scren .xmark").addEventListener("click", ()=>{
  blackScrenRemove()
})


let btnFilter = document.querySelectorAll(".portfolio-page ul li")
let itemBox = document.querySelectorAll(".portfolio-page .cards .card")

function imgfilter (){  
  let btnFilter = document.querySelectorAll(".portfolio-page ul li")
  let itemBox = document.querySelectorAll(".portfolio-page .cards .card")

  for(let i = 0; i < btnFilter.length; i++){
    btnFilter[i].addEventListener("click", ()=>{
      for(let k = 0; k < btnFilter.length; k++){
        btnFilter[k].classList.remove("active");
      }
      btnFilter[i].classList.add("active")


      let dataFilter = btnFilter[i].getAttribute('data-filter');

      for(let j = 0; j < itemBox.length; j++){
        itemBox[j].classList.remove('active')
        itemBox[j].classList.add("hide");

        if(itemBox[j].getAttribute('data-item') == dataFilter || dataFilter == "all"){
          itemBox[j].classList.remove('hide');
          itemBox[j].classList.add('active')
        }
      }
    })
  }
}
imgfilter()