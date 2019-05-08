const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: ['./src/index.js'],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Css compiler
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // TODO: separate into dev webpack config only!
          'css-loader',
        ],
      },
      // Scss compiler
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // file loader
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: __dirname.concat('/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
}
