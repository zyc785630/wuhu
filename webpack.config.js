const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
      },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              //本身并不能解析es6语法，必须依赖babel去解析
              //babel包含了一系列的插件去解析
              //babel依赖这些插件去解析
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 'vue-style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'[name:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/public/index.html'
        }),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new CopyPlugin([ //为了把public下除了index.html文件外的其余所有，给dist目录下拷贝一份
          {
              from:path.resolve(__dirname,'src/public'),
              to:path.resolve(__dirname,'dist'),
              ignore:['index.html']
          }
      ]),
    ],
    devServer:{
        port:8080,
        open:true,
        quiet:true,
    },

    devtool:'cheap-module-eval-source-map',

    resolve:{
      extensions: [".js", ".json",".vue"],//解决导入省略后缀名称
      alias:{
          '@': path.resolve(__dirname, 'src')//取别名，让@代替根路径下的src  '/src'
      }
  }

  };
  