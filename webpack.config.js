const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  plugins: [
    new HtmlWebpackPlugin({

      template: 'public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/js', to: 'js' },
        { from: 'public/css', to: 'css' },
        { from: 'public/images', to: 'images' },
        { from: 'public/json', to: 'json' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'CNAME'},
      ]
    }),
  ],
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add this line
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.join(__dirname, "public"), // Serve files from this directory
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
    hot: true
  },
};