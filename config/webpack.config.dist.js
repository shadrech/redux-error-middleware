var path = require('path');
var webpack = require('webpack');

var srcPath = path.resolve(__dirname, '../lib');
var nodeModulesPath = path.join(__dirname, '..', 'node_modules');

module.exports = {
  bail: true,

  devtool: 'eval',

  entry: {
    'redux-error-middleware': path.join(srcPath, 'index')
  },

  output: {
    path: './dist',

    filename: '[name].js',

    /**
     * export the bundle as library (output.library is the name)
     * Use this, if you are writing a library and want to publish it as single file.
     */
    library: 'redux-error-middleware',

    /**
     *  means using universal module definition for the final result
     *  this piece of code recognizes the environment and provides a proper bootstrapping mechanism
     */
    libraryTarget: 'umd',

    /**
     * true will name the AMD module
     *    if libraryTarget = umd and library is set
     */
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['', '.js']
  },

  resolveLoader: {
    root: nodeModulesPath,
    moduleTemplates: ['*-loader']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel',
        query: require('./babel.dist')
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ]
};
