const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',//开发环境
  entry: { //入口文件
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    clean:true //每次构建清理dist目录旧文件
  },
}
