const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './calculator.js', // or your main JS file
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // <-- tell Webpack where your HTML is
    }),
  ],
};
