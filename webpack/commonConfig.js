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
        },
        {
          test:   /\.css$/,
          include: options.path.app,
          loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'),
        title: 'React Playground',
        appMountId: 'app',
        inject: false
      }),
      new DashboardPlugin()
    ]
  };
};
