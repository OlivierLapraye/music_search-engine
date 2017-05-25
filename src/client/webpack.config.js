const path = require('path');

var config = {
   entry: './main.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2016', 'react']
            }
         }
      ]
   }
}

module.exports = config;
