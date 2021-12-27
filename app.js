const mobileNav =  document.getElementById('mobilenav');
const navOpenBtn =  document.getElementById('opennav');
const navCloseBtn =  document.getElementById('closenav');
const mainArticle = document.getElementById('main');
const cartItemsNoti = document.getElementById('items-incart');
const alert = document.getElementById('alert');
navOpenBtn.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(0)'
  navOpenBtn.style.visibility = 'hidden';
  mainArticle.style.display = 'none';
})
navCloseBtn.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(-100%)';
  navOpenBtn.style.visibility = 'visible';
  mainArticle.style.display = 'block';
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
const cartSectionMain = document.getElementById('cartsection--main')
let cartAmount = 0;
const lilac = () =>{
  const cartBtn = document.getElementById('cartbutton');
  const cartDelBtn = document.getElementById('cartDeletebutton');
  cartBtn.addEventListener('click',()=>{
  cartAmount=0;
  whatIsInCart(cartAmount);
  cartItemsNoti.textContent = '';
  });
  cartDelBtn.addEventListener('click',()=>{
    cartAmount=0;
    whatIsInCart(cartAmount);
    cartItemsNoti.textContent = '';
  });
}
const whatIsInCart = (amount) => {
  if(amount == 0) {
    cartSectionMain.innerHTML = '<p class="cartpara">Your cart is empty.</p>';
    return;
  };
  cartSectionMain.innerHTML = ` <div class="cartarticle">
  <div><img src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail image of product on cart"></div>
  <p>Fall Limited Edition Sneakers <br> $125.00 x <span>${amount}</span> <span id="totalOrder">$${125*amount}.00</span> </p>
  <button id='cartDeletebutton'><img src="./images/icon-delete.svg" alt="" aria-label="Click to delete all orders in cart"></button>
  </div>
  <button id="cartbutton" class="btn-lg">Checkout</button>`;
  lilac();
}
cartButton.addEventListener('click', () => {
  cartAmount+=amount;
  amount=0;
  calcAmount.innerHTML = `${amount}`;
  cartItemsNoti.textContent = `${cartAmount}`;
  whatIsInCart(cartAmount);
})
const toggleCartBtn = document.getElementById('cartToggle');
const cart = document.getElementById('cartsection');
let isCartOpen = false;
toggleCartBtn.addEventListener('click',() => {
  isCartOpen = !isCartOpen;
  isCartOpen ?cart.style.display = 'block' : cart.style.display = 'none' ;
});


