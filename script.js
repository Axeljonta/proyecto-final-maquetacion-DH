const menu = document.querySelector('.header_nav-icon');
const navList = document.querySelector('.header_nav');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450, 
    recet: true
})

sr.reveal('.hero',{delay: 200, origin:'top'})