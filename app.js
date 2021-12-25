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
const calcAdd = document.getElementById('calcadd');
const calcSubtract = document.getElementById('calcsubtract');
const calcAmount =  document.getElementById('calcamount');
let amount = 0;
calcAdd.addEventListener('click',()=>{
  amount++;
  calcAmount.innerHTML = `${amount}`;
})
calcSubtract.addEventListener('click',()=>{
  if(amount == 0) return
  amount--;
  calcAmount.innerHTML = `${amount}`;
})
const cartButton = document.getElementById('main--button');
let cartAmount = 0;
cartButton.addEventListener('click', () => {
  cartAmount+=amount;
  amount=0;
  calcAmount.innerHTML = `${amount}`;
})