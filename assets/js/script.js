//scroll
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 100;
  header.classList.toggle('fixed', windowPosition);
})

//show content
var accordions = document.querySelectorAll(".accordion__item");
var header = document.querySelector(".accordion__header");
var content = document.querySelector(".accordion__content");


function showContent() {
  for (item of accordions) {
    item.addEventListener("click", function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for (el of accordions) {
          el.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }
}



//!el.classList.contains('active') ? closeModal(el) : el.classList.toggle("active");

showContent();

//плавная прокрутка
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            } else if (!el.classList.contains("active")) {
                el.classList.add("active");
            }
*/