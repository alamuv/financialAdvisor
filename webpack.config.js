module.exports = {
  entry: './client/src/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};