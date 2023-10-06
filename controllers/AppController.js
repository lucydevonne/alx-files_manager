// Import necessary modules and models (e.g., mongoose models)
const { checkRedis, checkDB } = require('../utils/yourUtils'); // Replace with your actual utility functions
const User = require('../models/User'); // Replace with your actual User model
const File = require('../models/File'); // Replace with your actual File model

const AppController = {
  getStatus: async (req, res) => {
    try {
      // Check Redis and DB status using your utility functions
      const redisStatus = await checkRedis();
      const dbStatus = await checkDB();

      // Send the status response
      res.status(200).json({ redis: redisStatus, db: dbStatus });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStats: async (req, res) => {
    try {
      // Count users and files in the database
      const userCount = await User.countDocuments();
      const fileCount = await File.countDocuments();

      // Send the statistics response
      res.status(200).json({ users: userCount, files: fileCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AppController;
