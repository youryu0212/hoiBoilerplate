const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// src/index.js - index.html 연결
// src아래 sc(a)ss 파일 전부 index.html에 연결 (sass-loader -> css-loader -> style-loader 순서대로 동작)
// public에 index.html, bundel.js 생성
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ filename: "index.html", template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
};
