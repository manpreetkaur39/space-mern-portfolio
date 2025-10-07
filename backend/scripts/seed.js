require('dotenv').config();
const connectDB = require('../src/config/db');
const Project = require('../src/models/Project');

const projects = [
  {
    title: 'Project 1 — Galactic Portfolio',
    description: 'A space-themed personal portfolio with animated stars and planet backgrounds.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    link: 'https://example.com/galactic',
    image: '/images/galactic.png',
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manpreet-kaur' },
      { name: 'Medium', url: 'https://medium.com/@manpreet' }
    ],
    posts: [
      { title: 'Building a Galactic Portfolio', url: 'https://blog.example/galactic-portfolio' }
    ]
  },
  {
    title: 'Project 2 — Nebula Notes',
    description: 'A notes app with nebula color themes and offline support.',
    tech: ['React', 'IndexedDB'],
    link: 'https://example.com/nebula-notes',
    image: '/images/nebula.png',
    socials: [
      { name: 'Blog', url: 'https://your-blog.example/nebula-notes' }
    ],
    posts: [
      { title: 'Offline-first Notes', url: 'https://blog.example/offline-notes' }
    ]
  },
  {
    title: 'Project 3 — Nebula Commerce',
    description: 'An e-commerce demo with nebula-themed UI and animated checkout.',
    tech: ['React', 'Stripe'],
    link: 'https://example.com/nebula-commerce',
    image: '/images/commerce.png',
    socials: [
      { name: 'X', url: 'https://x.com/manpreet' },
      { name: 'Instagram', url: 'https://instagram.com/manpreet' }
    ],
    posts: []
  },
  {
    title: 'Project 4 — StarMap',
    description: 'Interactive star maps and constellation explorer.',
    tech: ['D3', 'Canvas'],
    link: '',
    image: '/images/starmap.png',
    socials: [],
    posts: [
      { title: 'Visualizing Stars', url: 'https://blog.example/visualizing-stars' }
    ]
  },
  {
    title: 'Project 5 — Mission Control',
    description: 'A dashboard for monitoring space missions and telemetry.',
    tech: ['Node', 'WebSockets'],
    link: 'https://example.com/mission-control',
    image: '/images/mission.png',
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manpreet-kaur' }
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
