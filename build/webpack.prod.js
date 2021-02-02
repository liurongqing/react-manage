const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
    // new CopyPlugin({
    //   patterns: [{
    //     from: 'public',
    //     to: './'
    //   }]
    // }),
    // new BundleAnalyzerPlugin()
  ]
}
