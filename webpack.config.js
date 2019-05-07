const webpack = require('webpack')



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
