var path = require("path");
var config = {
  entry: ["./src/app.tsx"],
  output: {
    path: path.resolve(__dirname, "built"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
};

module.exports = config;
