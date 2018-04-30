const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

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
    // rules: [
    //   {
    //     test: require.resolve('./src/client/index.react.js'),
    //     use: ""
    //   }
    // ],
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['flow', 'es2015', 'stage-0'], cacheDirectory: true }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.gif$/,
        loader: 'file-loader?name=media/img/[name].[ext]'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=saffron___[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/media/fonts/[name].[ext]'
      }
    ]
  },
  // devServer: {
  //   inline: true,
  //   contentBase: './app',
  //   port: 8080,
  //   host: '0.0.0.0'
  // },
  plugins: [
    HtmlWebpackPluginConfig,
    // new ExtractTextPlugin("styles.css"),
    new FlowBabelWebpackPlugin(),
    new sassLintPlugin({ glob: 'src/**/*.s?(a|c)ss' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BV_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }), // minify everything. https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#options for more options and defaults
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      asset: '[path][query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
    // new UglifyJsPlugin()
  ]
};
