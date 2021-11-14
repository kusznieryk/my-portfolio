import './styles.css';
import './images.js';
import './fetch-projects/index.js'
import './carousel/index.js'
const navbar = document.getElementsByClassName('navbar')[0];

const toggleNav = (e) => {
  if (window.screen.availWidth <= 768) navbar.classList.toggle('show');
};
navbar.addEventListener('click', toggleNav);

