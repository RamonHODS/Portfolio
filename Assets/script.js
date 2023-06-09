// Project class
class Project {
  constructor(title, language, description, demoLink, codeLink) {
    this.title = title;
    this.language = language;
    this.description = description;
    this.demoLink = demoLink;
    this.codeLink = codeLink;
  }

  generateHtml() {
    return `
      <div class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <p class="title is-4">${this.title}</p>
            <p class="subtitle is-6">${this.language}</p>
            <hr>
            <p class="content">${this.description}</p>
          </div>
          <footer class="card-footer">
            <a href="${this.demoLink}" class="card-footer-item">Demo</a>
            <a href="${this.codeLink}" class="card-footer-item">Code</a>
          </footer>
        </div>
      </div>
    `;
  }
}

// AboutMe class
class AboutMe {
  constructor(name, description, profilePicture) {
    this.name = name;
    this.description = description;
    this.profilePicture = profilePicture;
  }

  generateHtml() {
    return `
      <section id="about" class="section">
        <div class="container">
          <h1 class="title is-2">${this.name}</h1>
          <hr>
          <div class="columns">
            <div class="column is-two-thirds">
              <p class="content is-medium">${this.description}</p>
            </div>
            <div class="column">
              <figure class="image is-256x256">
                <img src="${this.profilePicture}" alt="Profile Picture">
              </figure>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Add projects to the projects container
const projectsContainer = document.querySelector('.projects-container');

const project1 = new Project(
  'XAUUSD Lot Calculator',
  'Coding Languages Used: HTML, JavaScript, and CSS',
  'I have created a powerful program tailored for leveraging trades on the XUAUSD forex pair. This advanced tool allows me to calculate the optimal position size based on my account size, desired risk percentage, and the total stop loss amount in pips. By utilizing this professional-grade solution, I can effectively manage risk and strategically execute trades with confidence, ensuring optimal profitability in the dynamic XUAUSD forex market.',
  'https://shorturl.at/lBQ67',
  'https://github.com/RamonHODS/XAUUSD-lot-calculator'
);

const project2 = new Project(
  'Currency Converter',
  'Coding Languages Used: HTML, CSS, JavaScript, BulmaCSS and JQuery',
  'The Currency Converter project is a web-based application that allows users to convert between different currencies. It demonstrates proficiency in HTML, CSS, JavaScript, API integration, and UI/UX design.',
  'https://namhn123.github.io/Currency-Converter/',
  'https://github.com/Namhn123/Currency-Converter'
);

const project3 = new Project(
  'Password Generator',
  'Coding Languages Used: HTML, CSS, JavaScript',
  'The password generator is a convenient tool that generates strong and secure passwords for your online accounts. With just a click of a button, you can instantly create complex passwords that include a combination of letters, numbers, and special characters. This helps you protect your sensitive information and ensures that your accounts are less susceptible to unauthorized access. ',
  'https://shorturl.at/hiSTW',
  'https://github.com/RamonHODS/challenge-3/tree/main'
);

const project4 = new Project(
  'Project 4',
  'Coding Language Used',
  'Project Description.',
  '#',
  '#'
);

projectsContainer.insertAdjacentHTML('beforeend', project1.generateHtml());
projectsContainer.insertAdjacentHTML('beforeend', project2.generateHtml());
projectsContainer.insertAdjacentHTML('beforeend', project3.generateHtml());
// projectsContainer.insertAdjacentHTML('beforeend', project4.generateHtml());


// Add "About Me" section
const aboutMe = new AboutMe(
  'About Me',
  `<p>Hello, I'm Ramon Silveira, a passionate and dedicated web developer with a strong focus on creating exceptional online experiences. Over the past 4 years, I have been self-taught in coding HTML, JavaScript, CSS, and LiquidJS, immersing myself in the world of web development.</p>` +
  `<p>With a natural curiosity and drive for continuous learning, I have become proficient in building responsive and user-friendly websites. I enjoy the art of crafting intuitive interfaces that seamlessly blend functionality and aesthetics, providing users with a delightful experience.</p>` +
  `<p>Currently, I am pursuing a coding bootcamp at KU to fill gaps in my knowledge, where I am learning various essential skills for web development which include:</p>` +
  `<ul>` +
    `<li>HTML</li>` +
    `<li>CSS</li>` +
    `<li>JavaScript</li>` +
    `<li>jQuery</li>` +
    `<li>Responsive Design</li>` +
    `<li>Bootstrap</li>` +
    `<li>Handlebars</li>` +
    `<li>Firebase</li>` +
    `<li>Cookies/Local Storage</li>` +
    `<li>React.js</li>` +
    `<li>Heroku</li>` +
    `<li>Git</li>` +
    `<li>MySQL</li>` +
    `<li>MongoDB</li>` +
    `<li>Node.js (Express, Security/Session Storage, User Authentication, MERN Stack)</li>` +
    `<li>SEO</li>` +
    `<li>Semantic HTML</li>` +
  `</ul>` +
  `<p></p>` +
  `<p>This six-month intensive program teaches skills that are vital to being a competitive employee in the field of web development, focusing on the needs of Kansas City and the surrounding areas.</p>` +
  `<p>Staying on top of the latest industry trends and technologies is a top priority for me. I thrive in collaborative environments and enjoy working with talented teams to transform innovative ideas into reality. My motivation, attention to detail, and ability to adapt to fast-paced environments set me apart.</p>` +
  `<p>If you are seeking a dedicated developer who combines a strong foundation in self-taught coding with a passion for continuous learning, I would be thrilled to connect with you. Let's collaborate to bring your vision to life!</p>`,
  './Assets/images/Screenshot_20210531-130139_Snapchat.jpg'
);




const aboutContainer = document.getElementById('about');
aboutContainer.innerHTML = aboutMe.generateHtml();


// Sticky header on scroll
const header = document.querySelector('header');
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function updateHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    navbar.classList.add('off-white');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.remove('off-white');
  }

  if (window.pageYOffset === 0) {
    navbar.classList.remove('off-white');
  }
}

window.addEventListener('scroll', updateHeader);
window.addEventListener('resize', updateHeader);