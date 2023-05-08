import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
];

export const services = [

  { 
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'All travel itineraries come at a competitive and affordable price point against all competitors.'
  },
  { 
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Looking for an endless adventure? We can accommodate any duration that will fulfill your desire.'
  },
  { 
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Outstanding comfort and safety are guaranteed with the best itineraries we have to offer.'
  },
];

export const tours = [
  { 
    id: 1,
    image: tour1,
    date: 'August 26th, 2023',
    title: 'Tibet Adventure',
    info: 'Going to Tibet offers an unforgettable journey to the "Roof of the World," with stunning Himalayan landscapes, ancient Buddhist temples, and a unique cultural experience shaped by its remote location and spiritual traditions.',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  { 
    id: 2,
    image: tour2,
    date: 'October 1th, 2022',
    title: 'Bali Adventure',
    info: 'Going to Bali in Indonesia offers a unique and immersive cultural experience, with beautiful beaches, vibrant markets, delicious food, and a rich tradition of art, dance, and spirituality.',
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  { 
    id: 3,
    image: tour3,
    date: 'September 15th, 2022',
    title: 'Explore Hong Kong',
    info: 'Going to Hong Kong provides a bustling and vibrant city experience, with a blend of modern skyscrapers, traditional temples, and a thriving food and shopping scene.',
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  { 
    id: 4,
    image: tour4,
    date: 'December 5th, 2022',
    title: 'Kenya Highlights',
    info: 'Going to Kenya offers the chance to see diverse wildlife on a safari, experience unique cultures and traditions, and explore stunning natural landscapes from mountains to beaches.',
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
  { 
    id: 5,
    image: tour5,
    date: 'July 7th, 2022',
    title: 'South African Extravaganza',
    info: 'Going to South Africa offers a diverse and culturally rich experience, with opportunities for wildlife safaris, breathtaking landscapes, historical sites, and vibrant cities.',
    location: 'South Africa',
    duration: 14,
    cost: 4500,
  },
  { 
    id: 6,
    image: tour6,
    date: 'January 10th, 2021',
    title: 'Taj Mahal',
    info: 'Visiting the Taj Mahal in Agra, India, is an awe-inspiring experience where one can admire the intricate details of the white marble mausoleum built by the Mughal emperor Shah Jahan in memory of his wife, and it is best to arrive early in the morning during the cooler months between November and February to avoid crowds and heat.',
    location: 'India',
    duration: 7,
    cost: 3800,
  },
];