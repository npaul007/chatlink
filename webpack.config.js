const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './views/index.html',
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin()
      ]
  };