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
    img: './assets/images/shot1.png',
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
    section.setAttribute('class', 'popup-card');

    const h1 = document.createElement('h1');
    h1.textContent = 'Tonic';
    section.appendChild(h1);

    const div = document.createElement('div');
    div.setAttribute('class', 'popup-xp');
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
    img.setAttribute('src', './assets/images/shot1.png');
    section.appendChild(img);

    const projectInfo = document.createElement('p');
    projectInfo.setAttribute('class', 'popup-project-info');

    const windowWidth = window.innerWidth || document.documentElement.clientWidth
    || document.body.clientWidth;

    if (windowWidth < 768) {
      projectInfo.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    } else {
      projectInfo.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br><br>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s';
    }
    section.appendChild(projectInfo);

    const skills = document.createElement('ul');
    skills.setAttribute('class', 'popup-skills');
    section.appendChild(skills);

    cardData.skills.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.setAttribute('class', 'popup-sbox');
      skillItem.textContent = skill;
      skills.appendChild(skillItem);
    });

    // Create the parent div element
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'popup-btn');

    // Create the "See Live" button
    const seeLiveBtn = document.createElement('input');
    seeLiveBtn.setAttribute('class', 'popup-btn1');
    seeLiveBtn.setAttribute('type', 'button');
    seeLiveBtn.setAttribute('value', 'See live');

    // Create the "See Source" button
    const seeSourceBtn = document.createElement('input');
    seeSourceBtn.setAttribute('class', 'popup-btn2');
    seeSourceBtn.setAttribute('type', 'button');
    seeSourceBtn.setAttribute('value', 'See source');

    // Create the image for the "See Live" button
    const liveImage = document.createElement('img');
    liveImage.setAttribute('src', './assets/images/button1.png');
    liveImage.setAttribute('alt', 'Live Image');

    // Create the image for the "See Source" button
    const sourceImage = document.createElement('img');
    sourceImage.setAttribute('src', './assets/images/button2.png');
    sourceImage.setAttribute('alt', 'Source Image');

    // Create a span for the text next to the "See Live" button
    const liveTextSpan = document.createElement('span');
    liveTextSpan.textContent = 'See live';

    // Create a span for the text next to the "See Source" button
    const sourceTextSpan = document.createElement('span');
    sourceTextSpan.textContent = 'See source';

    // Append the image and text to the "See Live" button
    seeLiveBtn.appendChild(liveImage);
    seeLiveBtn.appendChild(liveTextSpan);

    // Append the image and text to the "See Source" button
    seeSourceBtn.appendChild(sourceImage);
    seeSourceBtn.appendChild(sourceTextSpan);

    // Apply CSS styles to the images
    liveImage.style.display = 'block'; // Set display to block
    liveImage.style.width = '100%'; // Adjust width as needed
    liveImage.style.height = 'auto'; // Adjust height as needed

    sourceImage.style.display = 'block'; // Set display to block
    sourceImage.style.width = '100%'; // Adjust width as needed
    sourceImage.style.height = 'auto'; // Adjust height as needed
    // Append both buttons to the div
    buttonDiv.appendChild(seeLiveBtn);
    buttonDiv.appendChild(seeSourceBtn);

    // Event listener for the "See Live" button
seeLiveBtn.addEventListener('click', () => {
  // Navigate to the live site URL
  window.location.href = 'https://malikhaiderkhan.github.io/Portfolio/';
});

// Event listener for the "See Source" button
seeSourceBtn.addEventListener('click', () => {
  // Navigate to the source code URL
  window.location.href = 'https://github.com/malikhaiderkhan/Portfolio';
});

    // Append the div to the section element
    section.appendChild(buttonDiv);

    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'popup-close-button');
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
