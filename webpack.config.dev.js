const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.config');

// Same plugins as the production config, except:
//  (1) No Uglify minification.
//  (2) No production Node environment (which is used in production to disable
//      React's PropTypes validation).
config.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'deps',
    }),
];

config.devtool = '#eval-source-map';

config.devServer = {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000
  };

module.exports = config;
