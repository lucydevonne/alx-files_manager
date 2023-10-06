const User = require('../models/User');
const File = require('../models/File');

// Replace with your database connection and Mongoose models

// Example: MongoDB connection using Mongoose
// mongoose.connect('mongodb://localhost:27017/your-database-name');

async function checkDB() {
  // Implement your logic to check the database status
  // Example: Assume the database is always alive
  return true;
}

async function countUsers() {
  // Implement your logic to count users in the database
  const userCount = await User.countDocuments();
  return userCount;
}

async function countFiles() {
  // Implement your logic to count files in the database
  const fileCount = await File.countDocuments();
  return fileCount;
}

module.exports = { checkDB, countUsers, countFiles };
