import './styles.css';
import './images.js';
import './fetch-projects/index.js'
import './carousel/index.js'
import './activeSection/index.js'
const nav = document.getElementsByTagName('nav')[0]
const navbar = document.getElementsByClassName('navbar')[0];
const body = document.getElementsByTagName('body')[0]

const toggleNav = (e) => {
        body.removeEventListener('click', hideNavbar)
    if (window.screen.availWidth <= 768) {
        navbar.classList.toggle('show');
        nav.classList.toggle('animate-navbar')
        setTimeout(() => {
            body.addEventListener('click', hideNavbar)
        }, 100)
    }
};

const hideNavbar = (e) => {
    if (navbar.classList.contains('show'))
    {
        nav.classList.remove('animate-navbar')
        navbar.classList.remove('show')
        body.removeEventListener('click', hideNavbar)
    }
}
navbar.addEventListener('click', toggleNav);
