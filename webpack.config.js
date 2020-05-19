const HtmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true,
						},
					},
				],
			},
		],
	},
	entry: {
		app: path.join(__dirname, 'src', 'index.js'),
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundel.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [htmlWebpackPlugin],
};
