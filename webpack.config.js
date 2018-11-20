var path = require("path");
var config = {
  entry: ["./src/app.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]
      },
      {
        test: /\.woff$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
          },
        },
      }
    ]
  }
};

module.exports = config;
