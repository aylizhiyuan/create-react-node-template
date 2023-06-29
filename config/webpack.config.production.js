const { merge } = require('webpack-merge')
const path = require('path')
const root = path.join(__dirname, '../')
const ip = require('dev-ip')
const devIp = ip()[0] || 'localhost'
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pkgJSON = require('../package.json')
// 生产环境中可考虑将静态代码上传到cdn中使用，在执行compile的时候将静态文件发布即可
// const commonPublicPath = `//s1.wacdn.com/finance/`
// const publicPath = `${commonPublicPath}${pkgJSON.name}/`
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(root, 'build'),
    // 目前的做法是直接引用本地的文件即可
    publicPath: `http://${devIp}:8080`,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    hashDigestLength: 21,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash:21].css',
    }),
  ],
})
