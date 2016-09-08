const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function(options) {
  return {
    entry: {
      app: options.path.app
    },
    output: {
      path: options.path.build,
      filename: '[name].js'
    },
    module: {
      loaders: [
        // JS and JSX
        {
          test: /\.jsx?$/,
          include: options.path.app,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Playground'
      }),
      new DashboardPlugin()
    ]
  };
};
