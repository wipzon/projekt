const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('Application is healthy');
});

module.exports = app;
