module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },
  target: 'node',
  node: {
    fs: 'empty'

  }
};
