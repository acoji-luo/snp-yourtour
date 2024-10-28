const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		app: "./src/assets/js/index.js",
	},
	output: {
		clean: true,
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	devServer: {
		static: "./src",
		compress: true,
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]ss|css)$/i,
				//prettier-ignore
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							api: "modern",
							sassOptions: {}
						}
					}
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "YourTour",
			template: "src/index.html",
		}),
	],
};
