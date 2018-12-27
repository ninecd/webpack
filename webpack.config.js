const path = require('path')

// mini-css-extract-plugin将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持CSS和SourceMaps的按需加载。(并且需要webpack 4才能工作。)
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // js执行入口文件
  entry: './main.js',
  // 出口
  output: {
    // 将所有模块合并输出到一个bundle.js文件
    filename: 'bundle.js',
    // 将所有文件都放到dist目录下
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 用正则表达式去匹配要用该loader转换的css文件
        test: /\.css$/,
        // 符号 "?" 是因为每个loader都可以通过url querystring的方式传入参数(也可通过对象的形式  options:{xxxxx:xxxxx})，这里的参数minimize是告诉css-loader开启css压缩
        // use是一个loader数组， 执行顺序-倒序！
        // 重新构建时 需要安装loader
        // 3种写法   use[] , loader[] , use[{loader: xxx}, {loader: xxx}]
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
}