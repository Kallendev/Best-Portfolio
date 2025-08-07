const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // ✅ NEW

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/Best-Portfolio/', // ✅ Important for GitHub Pages
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // if you use CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'public',
        to: '.',
        globOptions: {
          ignore: ['**/index.html'], // ✅ Prevent conflict
        },
      },
    ],
  }),
],
};
