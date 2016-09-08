const path = require('path');
const mergeConfig = require('webpack-merge');
const validate = require('webpack-validator');

const devServer = require('./webpack/devServer');
const getCommonConfig = require('./webpack/commonConfig');

const PATH = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const commonConfig = getCommonConfig({ path: PATH });

function getWebpackConfig() {
  switch(process.env.npm_lifecycle_event) {
    case 'build':
      return mergeConfig(commonConfig, {});
    case 'dev':
    default:
      return mergeConfig(
        commonConfig,
        devServer({
          // Customize host/port here if needed
          host: process.env.HOST,
          port: process.env.PORT
        })
      );
  }
}


module.exports = validate(getWebpackConfig());
