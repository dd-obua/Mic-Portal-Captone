const menu = document.querySelector('.mobile-menu');
const menuLauncher = document.querySelector('.mobile-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');

const launchMenu = () => {
  menu.style.display = 'block';
};

const closeMenu = () => {
  menu.style.display = 'none';
};

menuLauncher.addEventListener('click', launchMenu);
closeMenuIcon.addEventListener('click', closeMenu);

const experts = [
  {
    picture: {
      src: './images/experts/expert-1.jpeg',
      alt: 'Picture of the first expert',
    },
    fullName: 'Dr. Jennifer Adam',
    expertise:
      'Artificial Intelligence and Robotics. Her research focuses on developing AI-driven robots for healthcare applications',
    affiliation: 'Massachusetts Institute of Technology (MIT) - Robotics Lab',
  },
  {
    picture: {
      src: './images/experts/expert-2.jpeg',
      alt: 'Picture of the second expert',
    },
    fullName: 'Prof. Mark Johnson',
    expertise:
      'Cybersecurity and Ethical Hacking. He is an authority on cybersecurity strategies and has conducted numerous penetration testing projects',
    affiliation: 'Stanford University - Center for Cybersecurity',
  },
  {
    picture: {
      src: './images/experts/expert-3.jpeg',
      alt: 'Picture of the third expert',
    },
    fullName: 'Dr. Emily Carter',
    expertise:
      'Quantum Computing and Computational Chemistry. Her pioneering work bridges the gap between quantum mechanics and chemistry',
    affiliation: 'Princeton University - Department of Chemistry',
  },
  {
    picture: {
      src: './images/experts/expert-4.jpeg',
      alt: 'Picture of the fourth expert',
    },
    fullName: 'John Lee',
    expertise:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    affiliation: 'Apple Inc. - Augmented Reality Research Team',
  },
  {
    picture: {
      src: './images/experts/expert-5.jpeg',
      alt: 'Picture of the fifth expert',
    },
    fullName: 'Dr. Alex Martinez',
    expertise:
      'Internet of Things (IoT) and Smart Cities. His research focuses on implementing IoT technologies to enhance urban sustainability',
    affiliation:
      'University of California, Berkeley - Institute for Smart Cities',
  },
  {
    picture: {
      src: './images/experts/expert-6.jpeg',
      alt: 'Picture of the sixth expert',
    },
    fullName: 'Sarah Williams',
    expertise:
      'Blockchain and Cryptocurrencies. She is a renowned blockchain expert, working on secure  and calable blockchain solutions',
    affiliation: 'Ethereum Foundation - Research and Development Division',
  },
];

const expertList = document.querySelector('.expert-list');

const generateExperts = (num) => {
  experts.forEach((expert, index) => {
    if (index >= num) return;

    const expertHtml = `
      <li>
        <article>
          <div class="expert-img">
            <img src="${expert.picture.src}" alt="${expert.picture.alt}">
          </div>
          <div>
            <h3>${expert.fullName}</h3>
            <p class="expertise">${expert.expertise}</p>
            <p class="affiliation">${expert.affiliation}</p>
          </div>
        </article>
      </li>
    `;
    expertList.insertAdjacentHTML('beforeend', expertHtml);
  });
};

const showMore = document.querySelector('.show-more');
const showLess = document.querySelector('.show-less');

const min = 2;
const max = 6;

showMore.addEventListener('click', () => {
  expertList.replaceChildren();
  generateExperts(max);
  showMore.style.display = 'none';
  showLess.style.display = 'block';
});

showLess.addEventListener('click', () => {
  expertList.replaceChildren();
  generateExperts(min);
  showMore.style.display = 'block';
  showLess.style.display = 'none';
});

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    generateExperts(min);
  } else {
    generateExperts(max);
    showMore.style.display = 'none';
  }
});
