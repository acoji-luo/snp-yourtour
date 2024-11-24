const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/assets/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		clean: true,
	},
	resolve: {
		alias: {
			images: path.resolve(__dirname, "src/assets/images/"),
		},
		extensions: [".js"],
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.html$/,
				use: "html-loader",
			},
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
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name][ext][query]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css",
		}),
	],
	devServer: {
		static: path.resolve(__dirname, "dist"),
		port: 8000,
		open: true,
		hot: true,
	},
};
