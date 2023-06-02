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
  '#',
  '#'
);

const project2 = new Project(
  'Project 2',
  'Coding Language Used',
  'Project Description.',
  '#',
  '#'
);

const project3 = new Project(
  'Project 3',
  'Coding Language Used',
  'Project Description.',
  '#',
  '#'
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
projectsContainer.insertAdjacentHTML('beforeend', project4.generateHtml());


// Add "About Me" section
const aboutMe = new AboutMe(
  'About Me',
  "<p>Hello, I'm Ramon Silveira, a passionate and dedicated web developer with a strong focus on creating exceptional online experiences. Over the past 4 years, I have been self-taught in coding HTML, JavaScript, and CSS, immersing myself in the world of web development.</p>" +
  "<p>With a natural curiosity and drive for continuous learning, I have become proficient in building responsive and user-friendly websites. I enjoy the art of crafting intuitive interfaces that seamlessly blend functionality and aesthetics, providing users with a delightful experience.</p>" +
  "<p>Currently, I am further expanding my skills and knowledge by pursuing a coding bootcamp at KU. This intensive program allows me to delve into advanced web development concepts, including backend technologies like Node.js and Express.js. Additionally, I am gaining expertise in database management and RESTful API development, enabling me to create robust and scalable web applications.</p>" +
  "<p>As a fast learner, I am always excited to embrace new coding languages and technologies. Whether it's Python, Ruby, or any other language, I am eager to take on new challenges and explore the endless possibilities they offer.</p>" +
  "<p>Staying abreast of the latest industry trends and technologies is a top priority for me. I thrive in collaborative environments and enjoy working with talented teams to transform innovative ideas into reality. My motivation, attention to detail, and ability to adapt to fast-paced environments set me apart.</p>" +
  "<p>If you are seeking a dedicated developer who combines a strong foundation in self-taught coding with a passion for continuous learning, I would be thrilled to connect with you. Let's collaborate to bring your vision to life!</p>",
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