const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['url-loader'],
      },
      // { 
      //   test: /\.png$/, 
      //   use: ['url-loader'],
      // },
      // { 
      //   test: /\.jpg$/, 
      //   use: ['file-loader'],
      // },
      // {
      //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
      //   use: ['url'],
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      //   use: ['url'],
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      //   use: ['file'],
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      //   use: ['url'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
  plugins: [
			new HtmlWebpackPlugin({
			title: 'Hello Webpack bundled JavaScript Project',
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
	],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
	},
};