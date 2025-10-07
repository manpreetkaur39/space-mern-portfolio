require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB and start server only after DB is available
(async () => {
	const connected = await connectDB({ retries: 8, delay: 2000 });
	if (!connected) {
		console.error('Failed to connect to DB — exiting');
		process.exit(1);
	}

	// Routes
	app.get('/', (req, res) => res.send('🚀 Space Portfolio API'));
	app.use('/api/projects', require('./src/routes/projects'));

	const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
