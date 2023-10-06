const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');

const AppController = {
  async getStatus(req, res) {
    const redisStatus = redisClient.isAlive();
    const dbStatus = dbClient.isAlive();
    const status = {
      redis: redisStatus,
      db: dbStatus,
    };

    if (redisStatus && dbStatus) {
      res.status(200).json(status);
    } else {
      res.status(500).json(status);
    }
  },

  async getStats(req, res) {
    const usersCount = await dbClient.nbUsers();
    const filesCount = await dbClient.nbFiles();
    const stats = {
      users: usersCount,
      files: filesCount,
    };

    res.status(200).json(stats);
  },
};

module.exports = AppController;

