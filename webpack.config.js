const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode:'development',
  entry: {
    app: './src/index.ts',
  },
  devtool:"inline-source-map",
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  resolve:{
    extensions:['.tsx','.ts','.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};