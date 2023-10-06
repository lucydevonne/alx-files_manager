// utils/redis.js

const redis = require('redis');

// Initialize your Redis client here
const client = redis.createClient();

client.on('error', (err) => {
  console.error(`Redis Error: ${err}`);
});

module.exports = client;

