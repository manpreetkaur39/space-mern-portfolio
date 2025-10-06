require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.get('/', (req, res) => res.send('🚀 Space Portfolio API'));
app.use('/api/projects', require('./src/routes/projects'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
