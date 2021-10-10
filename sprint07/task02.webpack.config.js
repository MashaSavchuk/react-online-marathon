// The tasks of the topic "Webpack"
// There is the file webpack.config.js
// Configure it to specify:
// 1.	Define the path ./src/main.js as an entry property in your webpack configuration
// 2.	Your configuration should output a single build.js file into the pub directory

const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'pub'),
    filename: 'build.js',
  },
};
