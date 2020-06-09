var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, './src/index.js'),
    store: './src/redux/store.js'
  },
  output: {
    publicPath: '/build/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'amd',
    //runtimeChunk: false
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    port: 8082
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.(s*)css$/,
        loader:['style-loader','css-loader', 'sass-loader']
      },
    ]
  }
}