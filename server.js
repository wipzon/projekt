// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static frontend files
app.use(express.static('public'));

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Application is healthy');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
