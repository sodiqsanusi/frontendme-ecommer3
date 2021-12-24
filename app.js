const mobileNav =  document.getElementById('mobilenav');
const navOpenBtn =  document.getElementById('opennav');
const navCloseBtn =  document.getElementById('closenav');
navOpenBtn.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(0)'
  navOpenBtn.style.visibility = 'hidden';
})
navCloseBtn.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(-100%)';
  navOpenBtn.style.visibility = 'visible';
})
const naviconPrev = document.getElementById('navicon-previous');
const naviconNext = document.getElementById('navicon-next');
const carouselImageSrc = document.getElementById('carousel-image');
let image = 1;

naviconPrev.addEventListener('click', () => {
  image--
  if (image == 0) image = 4;
  carouselImageSrc.setAttribute('src', `./images/image-product-${image}.jpg`)
  carouselImageSrc.style.filter = 'blur(20px)';
  setTimeout(() => {
    carouselImageSrc.style.filter = 'blur(0)';
  }, 300);
})
naviconNext.addEventListener('click', () => {
  image++
  if (image == 5) image = 1;
  carouselImageSrc.setAttribute('src', `./images/image-product-${image}.jpg`);
  carouselImageSrc.style.filter = 'blur(20px)';
  setTimeout(() => {
    carouselImageSrc.style.filter = 'blur(0)';
  }, 300);
})

