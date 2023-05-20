let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open')
}

// Scrollreveal Effect

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600, 
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 100, origin: 'top'})
sr.reveal('.hero-image', {delay: 200, origin: 'top'})