
// menu
const burger = document.querySelector(".burger");
const menu_container = document.querySelector(".menu");
const menu_wrapper = document.querySelector(".menu-wrapper");

function openMenu() {
  menu_container.classList.toggle("active");
  menu_wrapper.classList.toggle("wrapper-active");
}

/* SLIDE OTOMATIS */
let slideNow = 0;
let slide = document.querySelectorAll(".slide-item");
let jmlSlide = slide.length;
slide[slideNow].style.opacity= 1;

setInterval(function() {
  slide[0].style = "transition: 1s;opacity:0";
  slide[slideNow].classList.remove("s-active");
  
  slideNow++;
  if(slideNow >= jmlSlide) {
    slideNow = 0;
  }
  
  slide[slideNow].classList.add("s-active");
  
  setTimeout(function() {
    slide[slideNow].style = "transition: 1s;opacity:1";
  }, 1000)
  setTimeout(function() {
    slide[slideNow].style = "transition: 1s;opacity:0";
  }, 5600);
  
  // console.log(slideNow)
}, 6000);


/* VALIDASI FORM */
const username = document.querySelector("#nama");
const warning = document.querySelector(".alert");
const button = document.querySelector(".button");

// validasi USERNAME
/* 
  •> tidak boleh menulis selain Huruf, (.), (_), (-), dan @
  •> tidak boleh menulis angka
  •> panjang username minimal 8
  •> panjang username maxsimal 20 
*/
function usernameValidasi() {
 var string = /[^a-zA-Z_. \-@]/g; //filter inputan user
 if(string.test(username.value)) {
   console.log(string)
   username.value = username.value.replace(string, '');
 }
 
 if(username.value.length >= 30) {
   warning.innerHTML = "Panjang username tidak boleh lebih dari 20";
   username.classList.add("not-valid");
   button.setAttribute("disabled", true);
 } else if(username.value.length <= 8) {
   warning.innerHTML = "jumlah panjang minimal username adalah 8";
   username.classList.add("not-valid");
   button.setAttribute("disabled", true);
 } else {
   username.classList.remove("not-valid");
   warning.innerHTML = '';
   button.removeAttribute("disabled");
 }
}

const email = document.getElementById('email');
const mail_alert = document.querySelector(".email-alert");

function validEmail() {
  if(email.value.length < 3) {
    button.setAttribute("disabled", true);
    email.classList.add("not-valid");
    mail_alert.style.display="block";
  } else if(!email.value.includes("@")) {
    button.setAttribute("disabled", true);
    email.classList.add("not-valid");
    mail_alert.style.display="block";
  } else {
    email.classList.remove("not-valid");
    button.removeAttribute("disabled");
    mail_alert.style.display="none";
  }
}
