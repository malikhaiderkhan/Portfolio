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

const cardsData = [
  {
    id: 'portfolio1',
    class: 'card',
    img: './assets/images/card1.png',
    imgAlt: 'card1',
    title: 'Tonic',
    xpInfo: {
      company: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    projectInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    classButtons: 'work-button',
    onClickButton: '0',
  },
  {
    id: 'portfolio2',
    class: 'card',
    img: './assets/images/card2.png',
    imgAlt: 'card2',
    title: 'Multi-Post Stories',
    xpInfo: {
      company: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    projectInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    classButtons: 'work-button',
    onClickButton: '1',
  },
  {
    id: 'portfolio3',
    class: 'card',
    img: './assets/images/card3.png',
    imgAlt: 'card3',
    title: 'Tonic',
    xpInfo: {
      company: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    projectInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    classButtons: 'work-button button-corrected',
    onClickButton: '2',
  },
  {
    id: 'portfolio4',
    class: 'card',
    img: './assets/images/card4.png',
    imgAlt: 'card4',
    title: 'Multi-Post Stories',
    xpInfo: {
      company: 'Canopy',
      role: 'Back End Dev',
      year: '2015',
    },
    projectInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    classButtons: 'work-button',
    onClickButton: '3',
  },
];

const portfolioSection = document.querySelector('.portfolio');

cardsData.forEach((cardData, index) => {
  const card = document.createElement('div');
  card.setAttribute('class', cardData.class);

  const image = document.createElement('img');
  image.setAttribute('class', index % 2 === 0 ? 'left-card' : 'left-card reverse-left');
  image.setAttribute('src', cardData.img);
  image.setAttribute('alt', cardData.imgAlt);
  card.appendChild(image);

  const rightCard = document.createElement('div');
  rightCard.setAttribute('class', index % 2 === 0 ? 'right-card' : 'right-card reverse-right');
  card.appendChild(rightCard);

  const title = document.createElement('h2');
  title.textContent = cardData.title;
  rightCard.appendChild(title);

  const xpInfo = document.createElement('div');
  xpInfo.setAttribute('class', 'xp');
  rightCard.appendChild(xpInfo);

  const company = document.createElement('p');
  company.textContent = cardData.xpInfo.company;
  xpInfo.appendChild(company);

  const ul = document.createElement('ul');
  xpInfo.appendChild(ul);

  const role = document.createElement('li');
  role.textContent = cardData.xpInfo.role;
  ul.appendChild(role);

  const year = document.createElement('li');
  year.textContent = cardData.xpInfo.year;
  ul.appendChild(year);

  const projectInfo = document.createElement('p');
  projectInfo.setAttribute('class', 'project-info');
  projectInfo.textContent = cardData.projectInfo;
  rightCard.appendChild(projectInfo);

  const skills = document.createElement('ul');
  skills.setAttribute('class', 'skills');
  rightCard.appendChild(skills);

  cardData.skills.forEach((skill) => {
    const skillItem = document.createElement('li');
    skillItem.setAttribute('class', 'sbox');
    skillItem.textContent = skill;
    skills.appendChild(skillItem);
  });

  const seeProjectBtn = document.createElement('input');
  seeProjectBtn.setAttribute('class', 'btn');
  seeProjectBtn.setAttribute('type', 'button');
  seeProjectBtn.setAttribute('value', 'See project');
  rightCard.appendChild(seeProjectBtn);

  seeProjectBtn.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');

    const section = document.createElement('section');
    section.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = cardData.title;
    section.appendChild(h1);

    const div = document.createElement('div');
    div.setAttribute('class', 'xp');
    section.appendChild(div);

    const p = document.createElement('p');
    p.textContent = cardData.xpInfo.company;
    div.appendChild(p);

    const ul = document.createElement('ul');
    div.appendChild(ul);

    const li1 = document.createElement('li');
    li1.textContent = cardData.xpInfo.role;
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = cardData.xpInfo.year;
    ul.appendChild(li2);

    const img = document.createElement('img');
    img.setAttribute('src', cardData.img);
    section.appendChild(img);

    const projectInfo = document.createElement('p');
    projectInfo.setAttribute('class', 'project-info');
    projectInfo.textContent = cardData.projectInfo;
    section.appendChild(projectInfo);

    const skills = document.createElement('ul');
    skills.setAttribute('class', 'skills');
    section.appendChild(skills);

    cardData.skills.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.setAttribute('class', 'sbox');
      skillItem.textContent = skill;
      skills.appendChild(skillItem);
    });

    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'close-button');
    closeButton.textContent = 'X';
    section.appendChild(closeButton);

    popup.appendChild(section);
    document.body.appendChild(popup);

    closeButton.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  });

  portfolioSection.appendChild(card);
});

// -----Contact-form validation-----
const emailInput = document.getElementById('email');
const alertMessage = document.getElementById('alert');

function isEmailLowerCase(email) {
  const lowercaseEmail = email.toLowerCase();
  return email === lowercaseEmail;
}

document.getElementById('fcontact').addEventListener('submit', (event) => {
  if (!isEmailLowerCase(emailInput.value)) {
    event.preventDefault();
    alertMessage.textContent = 'Email must be in lowercase.';
    alertMessage.style.display = 'block';
  }
});

// -----preserve data storage-----
const form = document.getElementById('fcontact');
const nameinput = document.getElementById('name');
const messageinput = document.getElementById('msg');

// Load form data from local storage if available
const formData = JSON.parse(localStorage.getItem('formData')) || {};
if (formData) {
  emailInput.value = formData.email;
  nameinput.value = formData.name;
  messageinput.value = formData.msg;
}

form.addEventListener('input', () => {
  // Save form data to local storage
  const data = {
    email: emailInput.value,
    name: nameinput.value,
    msg: messageinput.value,
    // Add other form fields as needed
  };
  localStorage.setItem('formData', JSON.stringify(data));
});