const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, 'src/client/');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: APP_DIR + '/index.react.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/, loader: "flowtype", exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.s?css$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, new FlowBabelWebpackPlugin(), new sassLintPlugin({glob: 'src/**/*.s?(a|c)ss'})]
}
