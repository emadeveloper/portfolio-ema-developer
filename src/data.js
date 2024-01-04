//  icons
import {
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/gym-project.png';
import Project2 from './assets/img/projects/realstate-project.png';
import Project4 from './assets/img/projects/hangmen-project.png';
import Project3 from './assets/img/projects/netflix-clone.png';
import Project5 from './assets/img/projects/weather-project.png';
import Project6 from './assets/img/projects/ecommerce-project-1.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg4 from './assets/img/skills/javascript.png';
import SkillImg5 from './assets/img/skills/react.png';
import SkillImg8 from './assets/img/skills/npm.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg3 from './assets/img/skills/tailwind.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/emanuel-david-martinez/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/emadeveloper',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/emanuel_martinez_1992/',
  },
  {
    icon: <FiFacebook />,
    href: 'https://facebook.com/emanueldavidmartinez/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Gym website',
    category: 'Web Development',
    description: 'Gym website developed to sell diet plans and exercise routines for La resistencia gym. This website was made with React Js, plain and custom CSS.',
    href: 'https://github.com/emadeveloper',
  },
  {
    id: '2',
    image: Project2,
    name: 'Real State website',
    category: 'Landing',
    description: 'A real state landing page for selling houses and apartments. This website was made with React Js, plain and custom CSS.',
  },
  {
    id: '3',
    image: Project3,
    name: 'Netflix Clone',
    category: 'Web Development',
    description: 'This is a Netflix clone page , you can sign up, log in, and save your favorites movies/series. It was made by consuming the TMDB Movie database API, and created with React Js, Tailwind CSS, Google Firestore and Firebase Authentication.',
  },
  {
    id: '4',
    image: Project4,
    name: 'Hangmen Game',
    category: 'Game Development',
    description: 'Hangmen game made with React Js, plain CSS and Open Trivia API. You can choose the category of the questions and the difficulty',
  },
  {
    id: '5',
    image: Project5,
    name: 'Weather App',
    category: 'Web Development',
    description: 'Weather application made with React Js, plain CSS and Open Weather API. You can search for the weather of any city in the world.',
  },
  {
    id: '6',
    image: Project6,
    name: 'E-Commerce website',
    category: 'Landing',
    description: 'E-commerce website made with React Js, Tailwind CSS, and consuming the Fake Store API. You can add products to the cart, shop, remove items, clear the cart and more features.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Landing',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'Game Development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description: 'Designing beautiful websites with modern UI/UX',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Web development with modern technologies like HTML5, Javascript, React, Tailwind CSS, NodeJs.',
  },
  {
    icon: <FiPenTool />,
    name: 'Knowledge',
    description:
      'Always learning new things to improve my skills to develop the best applications.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      ' Search engine optimization to improve the visibility of your website in search engines like Google.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'You can contact me here:',
    mail: <a href="mailto:yinproducciones@gmail.com" target='_blank'>yinproducciones@gmail.com</a>
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Rio Negro, Argentina',
    description: 'San Carlos de Bariloche',
  },
];
