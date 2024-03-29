const { merge } = require('webpack-merge')
const path = require('path')
const ip = require('dev-ip')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const yaml = require('js-yaml')
const fs = require('fs-extra')
const root = path.join(__dirname, '../')
const devIp = ip()[0] || 'localhost'
const appConfigPath = path.join(root, 'config/app.yaml')
const appConfig = yaml.load(fs.readFileSync(appConfigPath))
const devPort = appConfig.server.devPort
module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    pathinfo: true,
    path: path.join(root, 'server/views'),
    publicPath: `http://${devIp}:${devPort}/`,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: 'ws://localhost:9080/ws',
    },
    historyApiFallback: true, // 在使用单页面的项目中,最终都会转向请求根目录
    hot: true,
    devMiddleware: {
      writeToDisk: (filePath) => {
        return /\.html$/.test(filePath)
      },
      publicPath: '/', // 意义
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    port: appConfig.server.devPort,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
})
