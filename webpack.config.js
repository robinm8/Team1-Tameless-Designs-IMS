var path = require('path')
var webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        include: [
            path.resolve(__dirname, './node_modules/vuesax'),
            path.resolve(__dirname, './src'),
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {  // << add options with presets env
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  //devtool: '#eval-source-map'
}

process.noDeprecation = true

module.exports.plugins = [new VueLoaderPlugin()]

if (process.env.NODE_ENV === 'production') {
  //module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //new webpack.optimize.UglifyJsPlugin({
      ////sourceMap: true,
      ////cache: true,
      ////parallel: true,
      //sourceMap: false,
      //compress: {
      //    warnings: false
      //}
    //}),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin()
  ])
}
