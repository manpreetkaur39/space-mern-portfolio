require('dotenv').config();
const connectDB = require('../src/config/db');
const Project = require('../src/models/Project');

const projects = [
  {
    title: 'Galactic Portfolio',
    description: 'A space-themed personal portfolio with animated stars and planet backgrounds.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    link: 'https://example.com',
    image: '/images/galactic.png',
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manpreet' },
      { name: 'Medium', url: 'https://medium.com/@manpreet' }
    ],
    posts: [
      { title: 'Building a Galactic Portfolio', url: 'https://blog.example/galactic-portfolio' }
    ]
  },
  {
    title: 'Nebula Notes',
    description: 'A notes app with nebula color themes and offline support.',
    tech: ['React', 'IndexedDB'],
    link: '',
    image: '/images/nebula.png',
    socials: [
      { name: 'Blog', url: 'https://blog.example/nebula-notes' }
    ],
    posts: []
  },
  {
    title: 'Orbit Shop',
    description: 'E-commerce mock for space merchandise.',
    tech: ['React', 'Stripe'],
    link: 'https://orbitshop.example',
    image: '/images/orbit.png',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/manpreet' }
    ],
    posts: [
      { title: 'How we handled payments', url: 'https://blog.example/orbit-payments' }
    ]
  },
  {
    title: 'Star Mapper',
    description: 'Interactive map of constellations and star data.',
    tech: ['D3', 'React'],
    link: 'https://starmapper.example',
    image: '/images/starmapper.png',
    socials: [],
    posts: []
  },
  {
    title: 'Comet Chat',
    description: 'Real-time chat built with WebSockets and space-themed stickers.',
    tech: ['Socket.io', 'Express'],
    link: '',
    image: '/images/comet.png',
    socials: [
      { name: 'X', url: 'https://x.com/manpreet' }
    ],
    posts: []
  }
];

const seed = async () => {
  await connectDB();
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log('Seeded projects');
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
