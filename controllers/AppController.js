// controllers/AppController.js

const redisClient = require('../utils/redis');
const db = require('../utils/db');

exports.getStatus = (req, res) => {
  // Check Redis and DB status
  const redisStatus = redisClient.connected;
  const dbStatus = !db.readyState || db.readyState === 1;

  res.status(200).json({ redis: redisStatus, db: dbStatus });
};

exports.getStats = async (req, res) => {
  try {
    // You should replace 'User' and 'File' with your actual Mongoose models
    const User = require('../models/User');
    const File = require('../models/File');

    const userCount = await User.countDocuments();
    const fileCount = await File.countDocuments();

    res.status(200).json({ users: userCount, files: fileCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
