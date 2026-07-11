// SCROLL NAVBAR
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = () => {
  menu.classList.toggle("active");
};

// optional animasi scroll (kalau mau efek muncul)
const cards = document.querySelectorAll(".paket-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

const track = document.querySelector(".testi-track");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateSlider(){
  track.style.transform = `translateX(-${index * 375}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// AUTO SLIDE
setInterval(() => {
  index++;
  if(index > 2) index = 0;
  updateSlider();
}, 4000);

