import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/index.jsx',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
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
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic', development: !isProduction }]
              ]
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
      port: Number(process.env.PORT) || 3000,
      open: process.env.NO_OPEN !== '1',
      hot: true
    }
  }
}
