const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	plugins: [
		new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
  devtool: 'eval-source-map',
};