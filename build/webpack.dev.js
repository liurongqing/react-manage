const path = require('path')
module.exports = {
  // devtool: 'eval',
  devtool: "source-map",
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8888,
  },
}
