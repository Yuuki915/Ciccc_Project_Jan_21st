// * Loading effection
const items = document.querySelectorAll('#gallery li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// * Vars for showcase
const showcaseContainer = document.querySelector('.showcase-container'),
  imgs = document.querySelectorAll('.showcase-container .img'),
  btnLeft = document.querySelector('.btn-slide-left'),
  btnRight = document.querySelector('.btn-slide-right'),
  intervalTime = 5000;

let slideInterval;

// * Funcs for showcase
const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    imgs[0].classList.add('current');
  }
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    imgs[imgs.length - 1].classList.add('current');
  }
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
};

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

slideInterval = setInterval(nextSlide, intervalTime);

// * Vars for best-seller
const bestSellerContainer = document.querySelector('.best-seller-container'),
  bsImgs = document.querySelectorAll('.best-seller-container li'),
  prev = document.querySelector('.btn-scroll-left'),
  next = document.querySelector('.btn-scroll-right');

let idx = 0;

// * Func for best-seller
function changeImage() {
  if (idx > bsImgs.length - 3) {
    idx = 0;
  } else if (idx < 0) {
    idx = bsImgs.length - 3;
  }
  bestSellerContainer.style.transform = `translateX(${-idx * 480}px)`;
}

next.addEventListener('click', () => {
  idx++;

  changeImage();
});

prev.addEventListener('click', () => {
  idx--;

  changeImage();
});
