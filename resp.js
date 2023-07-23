burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navbarlist = document.querySelector('.navbarlist')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click' , ()=>{
    rightnav.classList.toggle('v-class-resp')
    navbarlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('nav-height-resp')

})