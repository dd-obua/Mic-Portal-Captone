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
    picture: './images/experts/expert-1.jpeg',
    fullName: 'Dr. Jennifer Adam',
    expertise:
      'Artificial Intelligence and Robotics. Her research focuses on developing AI-driven robots for healthcare applications',
    workPlace: 'Massachusetts Institute of Technology (MIT) - Robotics Lab',
  },
  {
    picture: './images/experts/expert-2.jpeg',
    fullName: 'Prof. Mark Johnson',
    expertise:
      'Cybersecurity and Ethical Hacking. He is an authority on cybersecurity strategies and has conducted numerous penetration testing projects',
    workPlace: '',
  },
  {
    picture: './images/experts/expert-3.jpeg',
    fullName: 'Dr. Emily Carter',
    expertise:
      'Quantum Computing and Computational Chemistry. Her pioneering work bridges the gap between quantum mechanics and chemistry',
    workPlace: 'Princeton University - Department of Chemistry',
  },
  {
    picture: './images/experts/expert-4.jpeg',
    fullName: 'John Lee',
    expertise:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    workPlace: 'Apple Inc. - Augmented Reality Research Team',
  },
  {
    picture: './images/experts/expert-5.jpeg',
    fullName: 'Dr. Alex Martinez',
    expertise:
      'Internet of Things (IoT) and Smart Cities. His research focuses on implementing IoT technologies to enhance urban sustainability',
    workPlace:
      'University of California, Berkeley - Institute for Smart Cities',
  },
  {
    picture: './images/experts/expert-6.jpeg',
    fullName: 'Sarah Williams',
    expertise:
      'Blockchain and Cryptocurrencies. She is a renowned blockchain expert, working on secure  and calable blockchain solutions',
    workPlace: 'Ethereum Foundation - Research and Development Division',
  },
];
