const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new FaviconsWebpackPlugin('./src/assets/images/favicon.png'),
    ],
  };
};
