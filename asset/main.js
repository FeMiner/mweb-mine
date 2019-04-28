const mobileMenuBtn = document.querySelector('#site-banner>.mobile-menu-btn')
const mainMenu = document.querySelector('#main-menu')

if(mobileMenuBtn){
  mobileMenuBtn.addEventListener('click',() => {
    mainMenu.classList.add('mobile-menu')
  }, false)
}