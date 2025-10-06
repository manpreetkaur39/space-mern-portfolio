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
  },
  {
    title: 'Nebula Notes',
    description: 'A notes app with nebula color themes and offline support.',
    tech: ['React', 'IndexedDB'],
    link: '',
    image: '/images/nebula.png',
  },
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
