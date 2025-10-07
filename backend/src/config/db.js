const mongoose = require('mongoose');

/**
 * Connect to MongoDB with retries.
 * Returns true on success, false on failure after retries.
 */
const connectDB = async ({ retries = 5, delay = 2000 } = {}) => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/space-portfolio';
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
      return true;
    } catch (err) {
      console.error(`MongoDB connection attempt ${attempt} failed:`, err.message);
      if (attempt < retries) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  console.error('MongoDB connection failed after retries');
  return false;
};

module.exports = connectDB;
