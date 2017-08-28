const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});
const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'commons.js'
);

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/views/Home/Home.jsx',
  },
  output: {
    path: __dirname + 'dist',
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    extensions: ['*', '.js'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [HtmlWebpackPluginConfig, CommonsChunkPlugin],
  devtool: 'eval-source-map',
};
