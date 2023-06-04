import {config} from "./config.js";

particlesJS('header', config)

const select = document.querySelector.bind(document)
const selectAll = document.querySelectorAll.bind(document)
const body = select('body')
const mainInput = document.querySelector('#header-input')
const signUp = document.querySelector('#sign-up')
const emailEx = /^[^\d\W](\w+\d+|\w+)@gmail\.com$/
/*
    Header
 */

signUp.addEventListener('click', (e) => {
    if (mainInput.value.length > 14 && mainInput.value.match(emailEx)){
        localStorage.setItem('email', mainInput.value)
    }
    else{
        e.preventDefault()
    }

})



const menu = select('.menu')
menu.addEventListener('click', () => {
    const mobi = select('.mobi')
    mobi.classList.add('fullscreen')
    body.classList.toggle('locked')
})

const close = document.querySelector('.close-menu')
close.addEventListener('click', () => {
    const mobi = document.querySelector('.mobi')
    mobi.classList.remove('fullscreen')
    body.classList.toggle('locked')
})


/*
    Footer
 */
const footerItems = selectAll('.footer-item')
footerItems.forEach((item) => {
    let plusItem = item.querySelector('.drop-links')
    let sliderItem = item.querySelector('.footer-content')
    plusItem.addEventListener('click', () => {
        plusItem.classList.toggle('spin')
        sliderItem.classList.toggle('slide')
    })
})

/*
    Getting Started
*/

