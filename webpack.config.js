const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: false,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./build",
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
      favicon: path.resolve("./public/favicon.ico"),
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
