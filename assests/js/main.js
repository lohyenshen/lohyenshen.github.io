/*==================== MENU SHOW Y HIDDEN ====================*/
const
    navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener( 'click', () => {
        navMenu.classList.add('show-menu')
    })
    // console.log('has TOGGLE')
}

if (navClose) {
    navClose.addEventListener( 'click', () => {
        navMenu.classList.remove('show-menu')
    })
    // console.log('has CLOSE')
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    // when we click on any nav__link
    // we will remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach( n => n.addEventListener( 'click', linkAction))



/*==================== ACCORDION SKILLS ====================*/
// when click on any skills_header
// close all other skills_header
// open current skills_header if close

const
    skillsContents = document.getElementsByClassName('skills__content'), // this is which skill to display
    skillsHeaders = document.querySelectorAll('.skills__header') // this is where user click

// to use "this",
// need to use function() instead of anonymous function
function toggleSkills() {

    // store this's parentNode's class in a variable
    // to refer later
    // let itemClass = this.parentNode.className
    //
    // // change all skill__content to closed
    // for (let i=0; i<skillsContents.length; i++)
    //     skillsContents[i].className = 'skills__content skills__close'
    //
    // // using the stored value
    // // if it is closed, open it up
    // if (itemClass === 'skills__content skills__close')
    //     this.parentNode.className = 'skills__content skills__open'




    // determine if this  header is open
    let isOpen = this.parentNode.classList.contains('skills__open')

    // change all skill__headers to closed
    for (let i=0; i<skillsContents.length; i++)
        skillsContents[i].classList.remove('skills__open')


    if (isOpen) // if current header open, it has already been closed in previous for loop
        ;
    else // if current header closed, open to show skills
        this.parentNode.classList.add('skills__open')
}

// for each skills__header
// listen to a click event
skillsHeaders.forEach( e => e.addEventListener( 'click', toggleSkills))


// /*==================== QUALIFICATION TABS ====================*/
const
    qualificationTabs     = document.querySelectorAll('[data-target]'),
    qualificationContents = document.querySelectorAll('[data-content]')

qualificationTabs.forEach( tab => {
    tab.addEventListener( 'click', () => {

        // target is the id hold by [data-target] defined in html
        // it points to a specific div where its id matches
        // for example
        //      data-target="#education"
        // points to a div where
        //      id="education"                //////////////////
        const target = document.querySelector(tab.dataset.target)


        // remove "qualification__active" from all div
        // add "qualification__active" to target div
        qualificationContents.forEach( content => {
            content.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        // remove 'qualification__active' from all tabs
        // add 'qualification__active' to current tab
        qualificationTabs.forEach( tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const
    modalButtons = document.querySelectorAll('.services__button'),
    modalViews   = document.querySelectorAll('.services__modal'),
    modalCloses  = document.querySelectorAll('.services__modal-close')


// WHEN MODAL BUTTON IS CLICKED, OPEN MODAL VIEW
// for each modal button, add an event listener
modalButtons.forEach( (modalButton, i) => {

    // each button is added with a function
    // when click on it,
    //      it will add 'active-modal' class to its corresponding view (correlated by index)
    modalButton.addEventListener( 'click', () => {
        modalViews[i].classList.add('active-modal')
    })
})

// WHEN MODAL CLOSE IS CLICK, CLOSE MODAL VIEW
modalCloses.forEach( (modalClose,i) => {
    modalClose.addEventListener( 'click', () => {
        modalViews[i].classList.remove('active-modal')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});


/*==================== TESTIMONIAL ====================*/
/* TO DO IN FUTURE IF REQUIRED */

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// this method add 'active-link' class to nav__menu when visiting the current section

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(currentSection =>{
        const sectionHeight = currentSection.offsetHeight
        const sectionTop    = currentSection.offsetTop - 80;
        // const sectionTop    = currentSection.offsetTop;

        const sectionId     = currentSection.getAttribute('id')

        const navMenu = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        try {
            // scrollY in current section
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
                navMenu.classList.add('active-link')
            else
                navMenu.classList.remove('active-link')
        }catch (e){
            //ignore the error because we are just trying to add active-link class}
        }
    })
}

window.addEventListener( 'scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')

    // When the scroll is greater than nav's height
    // add the scroll-header class to the header tag
    if (this.scrollY > nav.offsetHeight)
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 560 viewport height,
    // add the show-scroll class to the <a> tag with the scroll-top class
    if (this.scrollY >= 560)
        scrollUp.classList.add('show-scroll-up')
    else
        scrollUp.classList.remove('show-scroll-up')

    // TEST
    // sections.forEach( current => {
    //
    //     // get current section id
    //     const sectionId = current.getAttribute('id')
    //
    //     if (sectionId==='project' || sectionId==='footer'){
    //         scrollUp.classList.add('change-scroll-up-color')
    //         console.log('hey')
    //     }
    //     else {
    //         scrollUp.classList.remove('change-scroll-up-color')
    //         // console.log('NOOOOO AT PROJECT OR FOOTER')
    //     }
    // })
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme   = 'dark-theme'
const iconTheme   = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled,
    // we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme ===  'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== REVEAL ANIMATION ====================*/
const
    zero       =    0,
    zeroPoint2 =  200,
    zeroPoint4 =  400,
    zeroPoint6 =  600,
    zeroPoint8 =  800,
    onePoint   = 1000,
    onePoint2  = 1200,
    onePoint4  = 1400,
    onePoint6  = 1600


window.sr = ScrollReveal({
    origin:'top',
    distance: '100px',
    duration: 800
});

sr.reveal('.section__title',{})
sr.reveal('.section__subtitle', {})



sr.reveal('.home__title',{})
sr.reveal('.home__social-icon',{interval:zeroPoint2})
sr.reveal('.home__subtitle',{delay:zeroPoint4})
sr.reveal('.home__description',{delay:zeroPoint8})
sr.reveal('.home__img',{delay:zeroPoint2})
sr.reveal('.home__button',{delay:onePoint2 })
sr.reveal('.home__button', {delay:onePoint2})
sr.reveal('.home__scroll',{delay:onePoint2})

sr.reveal('.about__img',{delay:zeroPoint2})
sr.reveal('.about__description',{delay:zeroPoint4})
sr.reveal('.about__info-title',{delay:zeroPoint4,interval:zeroPoint2})
sr.reveal('.about__info-name',{delay:zeroPoint4,interval:zeroPoint2})
sr.reveal('.about__button',{delay:onePoint2})

sr.reveal('.skills__title',{})
sr.reveal('.skills__content',{delay:zeroPoint2, interval:zeroPoint2})

sr.reveal('.qualification__container',{delay:zeroPoint4})

// sr.reveal('.services__content', {delay:zeroPoint4, interval:zeroPoint2}) // GOT BUG
sr.reveal('.services__icon', {delay:zero})
sr.reveal('.services__title', {delay:zeroPoint2})
sr.reveal('.services__button', {delay:zeroPoint4, interval:zeroPoint2})


sr.reveal('.portfolio__container',{delay:zeroPoint4})

sr.reveal('.project__bg',{})


sr.reveal('.contact__icon',{interval:zeroPoint4})
sr.reveal('.contact__information',{interval:zeroPoint2})