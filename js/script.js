const menu = document.querySelector('.mobile-menu');
const menuLauncher = document.querySelector('.mobile-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');

const launchMenu = () => {
  menu.classList.remove('hidden');
};

const closeMenu = () => {
  menu.classList.add('hidden');
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
    workPlace: 'Massachusetts Institute of Technology (MIT) - Robotics Lab',
  },
  {
    picture: {
      src: './images/experts/expert-2.jpeg',
      alt: 'Picture of the second expert',
    },
    fullName: 'Prof. Mark Johnson',
    expertise:
      'Cybersecurity and Ethical Hacking. He is an authority on cybersecurity strategies and has conducted numerous penetration testing projects',
    workPlace: '',
  },
  {
    picture: {
      src: './images/experts/expert-3.jpeg',
      alt: 'Picture of the third expert',
    },
    fullName: 'Dr. Emily Carter',
    expertise:
      'Quantum Computing and Computational Chemistry. Her pioneering work bridges the gap between quantum mechanics and chemistry',
    workPlace: 'Princeton University - Department of Chemistry',
  },
  {
    picture: {
      src: './images/experts/expert-4.jpeg',
      alt: 'Picture of the fourth expert',
    },
    fullName: 'John Lee',
    expertise:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    workPlace: 'Apple Inc. - Augmented Reality Research Team',
  },
  {
    picture: {
      src: './images/experts/expert-5.jpeg',
      alt: 'Picture of the fifth expert',
    },
    fullName: 'Dr. Alex Martinez',
    expertise:
      'Internet of Things (IoT) and Smart Cities. His research focuses on implementing IoT technologies to enhance urban sustainability',
    workPlace:
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
    workPlace: 'Ethereum Foundation - Research and Development Division',
  },
];

const expertList = document.querySelector('.expert-list');

let num = 2;

const generateExperts = num => {
  for (let i = 0; i < num; i++) {
    const expertHtml = `
    <li>
      <article>
        <img src="${experts[i].picture.src}" alt="${experts[i].picture.alt}">
        <div>
          <h3>${experts[i].fullName}</h3>
          <p class="expertsise">${experts[i].expertise}</p>
          <p class="work-place">${experts[i].workPlace}</p>
        </div>
      </article>
    </li>
  `;
    expertList.insertAdjacentHTML('beforeend', expertHtml);
  }
};

generateExperts(2);

const showMore = document.querySelector('.show-more');
const showLess = document.querySelector('.show-less');

num = 6;

showMore.addEventListener('click', () => {
  expertList.replaceChildren();
  generateExperts(num);
  showMore.style.display = 'none';
  showLess.style.display = 'block';
});

showLess.addEventListener('click', () => {
  expertList.replaceChildren();
  generateExperts(2);
  showMore.style.display = 'block';
  showLess.style.display = 'none';
});
