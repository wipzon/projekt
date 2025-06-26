const path = require('path');

module.exports = {
  entry: './calculator.js',   // Adjust this to your real entry file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
