/* SELECAO DE ELEMENTOS */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('header#header')
const home = document.querySelector('section.section#home')
const toTopBtn = document.querySelector('.button-to-top a')
const sections = document.querySelectorAll('main section[id]')

const homeHeight = home.offsetHeight
const navHeight = header.offsetHeight

toggle.forEach((e) => {
    e.addEventListener('click', toggleMenu)
})

links.forEach((e) => {
    e.addEventListener('click', closeMenu)
})


window.addEventListener('scroll', () => {
    backToTop()
    scrollHeader()
    activeMenuAtCurrentSection()
})


/* FUNCOES */
function toggleMenu() {
    nav.classList.toggle('show')
}

function closeMenu() {
    nav.classList.remove('show')
}

function scrollHeader() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

function backToTop() {
    if (window.scrollY > homeHeight) {
        toTopBtn.classList.add('show')
    } else {
        toTopBtn.classList.remove('show')
    }
}

function activeMenuAtCurrentSection() {
    const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        const checkPointStart = checkPoint >= sectionTop
        const checkPointEnd = checkPoint <= sectionTop + sectionHeight


        if (checkPointStart && checkPointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
            // document.querySelector('nav ul li a[href^=#')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}



/* swiper SLIDER */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        770: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 600,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
     #about .image, #about .text
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social`,
    { interval: 100 })