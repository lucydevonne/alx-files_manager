// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');

// Use the routes defined in routes/index.js
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
