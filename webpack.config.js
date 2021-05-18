const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // 生成的运行时代码中可以使用哪个版本的 ES 特性
    // https://webpack.docschina.org/configuration/output/#outputenvironment
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    targets: {
                      chrome: '44',
                      firefox: '60',
                      ie: '9',
                      safari: '10',
                      edge: '17'
                    },
                    // 指定corejs的版本
                    corejs: '3',
                    /* useBuiltIns："usage" | "entry" | false 默认false
                      entry: 在入口文件中加入所有的内置类型 （import "@babel/polyfill"）
                      usage: 只在当前文件中加入该文件用到的内置类型的polyfill。(按需加载)
                    */
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5000,
    open: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'TS demo',
      template: './src/index.html'
    })
  ],
  mode: 'development',
  target: 'web',

  // 设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}