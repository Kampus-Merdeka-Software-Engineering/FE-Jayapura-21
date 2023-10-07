const slider = document.querySelector('.slider');
let slideIndex = 1;
function showSlide(index) {
  slider.style.transform = `translateX(-${(index - 1) * 100}%)`;
}
function nextSlide() {
  slideIndex = (slideIndex % 5) + 1;
  showSlide(slideIndex);
}
setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik

//Side Bar
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active');
}