// menu
let Nav = document.getElementById("nav");
let OpenNav = function(){
  Nav.style.left = "0%";
}
let CloseNav = function(){
  Nav.style.left = "-100%";
}
// slide

var swiper = new Swiper(".small_slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
});

function Link(){
  location.href = "https://www.hay88.one/?inviteCode=8312996";
}