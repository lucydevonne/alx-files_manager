const redisUtils = require('../utils/redisUtils');
const dbUtils = require('../utils/dbUtils');

const AppController = {
  getStatus: async (req, res) => {
    try {
      // Check Redis and DB status using utils
      const redisStatus = await redisUtils.checkRedis();
      const dbStatus = await dbUtils.checkDB();

      // Send status response
      res.status(200).json({ redis: redisStatus, db: dbStatus });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStats: async (req, res) => {
    try {
      // Count users and files in the DB
      const userCount = await dbUtils.countUsers();
      const fileCount = await dbUtils.countFiles();

      // Send statistics response
      res.status(200).json({ users: userCount, files: fileCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AppController;
