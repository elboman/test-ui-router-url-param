var path = require("path");
var webpack = require("webpack");


var config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      include: /\.min\.js$/,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          ["es2015", { modules: false }],
          ["react"],
          ["stage-0"]
        ]
      }
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: {}
  }
}

module.exports = config;