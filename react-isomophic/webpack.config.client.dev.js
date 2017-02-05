var webpack = require('webpack')
var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/entry.js'
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: 8080
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot-loader!babel-loader?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader'
        )
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=image/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: false,
      favicon: './src/favicon.ico',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
