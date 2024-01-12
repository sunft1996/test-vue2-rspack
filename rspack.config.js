const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	experiments: {
		css: true
	},
	devtool: false,
	plugins: [new VueLoaderPlugin()],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: "vue-loader",
			},
			{
				test: /\.css$/,
				type: "css"
			},
			// {
			// 	test: /\.css$/,
			// 	use: ["vue-style-loader", "css-loader"],
			// 	type: "javascript/auto"
			// },
			{
				test: /\.less$/,
				use: ["less-loader"],
				type: "css"
			},
			{
				test: /\.svg$/,
				type: "asset/resource"
			}
		]
	}
};
module.exports = config;
