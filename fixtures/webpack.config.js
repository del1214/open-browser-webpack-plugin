var path = require('path');
var OpenBrowserWebpackHooksPlugin = require('../index');

module.exports = {
  entry: path.resolve(__dirname, 'lib/entry.js'),
  output: {
    path: __dirname + "/bundle/",
    filename: "bundle.js"
  },
  plugins: [
    new OpenBrowserWebpackHooksPlugin({ url: 'http://localhost:3000' })
  ]
};