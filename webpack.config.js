import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: './src/index.js',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/css', to: 'css' },
        { from: 'public/images', to: 'images' },
        { from: 'public/json', to: 'json' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'CNAME' }
      ]
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    open: true,
    hot: true
  }
}
