const burger = document.querySelector('.hamburger')
const closebtn = document.querySelector('.close-btn')
const nav = document.querySelector('nav')
burger.addEventListener ('click', openNav)
closebtn.addEventListener('click', closeNav)

function openNav(e) {
    e.preventDefault()
    nav.style.display='block'
}

function closeNav(e) {
    e.preventDefault()
    nav.style.display='none'
}