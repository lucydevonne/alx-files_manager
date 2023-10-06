const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    const dbName = process.env.DB_DATABASE || 'files_manager';

    const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async isAlive() {
    try {
      await this.client.connect();
      return true;
    } catch (error) {
      return false;
    } finally {
      await this.client.close();
    }
  }

  async nbUsers() {
    try {
      await this.client.connect();
      const collection = this.client.db().collection('users');
      const count = await collection.countDocuments();
      return count;
    } catch (error) {
      return -1; // Return -1 to indicate an error.
    } finally {
      await this.client.close();
    }
  }

  async nbFiles() {
    try {
      await this.client.connect();
      const collection = this.client.db().collection('files');
      const count = await collection.countDocuments();
      return count;
    } catch (error) {
      return -1; // Return -1 to indicate an error.
    } finally {
      await this.client.close();
    }
  }
}

const dbClient = new DBClient();

module.exports = dbClient;

