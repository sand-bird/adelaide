module.exports = {  
  entry: './app/index.js',
  output: {
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loader: 'style!css!sass!sass-imports?./vars.json'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url'
      },
      {
        test: /\.png$/,
        loader: 'url?mimetype=image/png'
      }
    ]
  }
}
