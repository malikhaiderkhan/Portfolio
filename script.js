const hamburger = document.querySelector('#hamburger');
const blurBackground = document.querySelector('.blur-background');
const menuLayer = document.querySelector('.menu-layer');

function pops() {
  blurBackground.style.display = 'block';
  menuLayer.style.display = 'flex';
}

hamburger.addEventListener('click', pops);

const closeButton = document.querySelector('.close-button');

function unPops() {
  blurBackground.style.display = 'none';
  menuLayer.style.display = 'none';
}

closeButton.addEventListener('click', unPops);

const Portfolio = document.querySelector('#Portfolio');
const About = document.querySelector('#About');
const Contact = document.querySelector('#Contact');

Portfolio.addEventListener('click', unPops);
About.addEventListener('click', unPops);
Contact.addEventListener('click', unPops);
