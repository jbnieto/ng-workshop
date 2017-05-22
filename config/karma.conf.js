var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',
    //Frameworks we will use
    frameworks: ['jasmine', 'source-map-support'],
    //We load the files through our shim configuration
    files: [
      { pattern: './config/karma-test-shim.js', watched: false }
    ],
    //We use sourcemap preprocessor for having the correct stack trace instead of the stacktrace from the bundle.
    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap'],
      './src/**/*.spec.ts': ['webpack']
    },
    //Passing webpack test config
    webpack: webpackConfig,
    //Webpack middleware configuration. We just want to see webpack errors, not all the verbose output
    webpackMiddleware: {
      stats: 'errors-only'
    },
    //Webpack server config
    webpackServer: {
      noInfo: true
    },
    //Our reporters
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    //List of browsers where we want to run our tests. For the list of browsers see karma web page.
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: true,
    //We generate the json report that will be used by remap-istanbul, which is used to get proper coverage reports on our TS files (via npm script)
    coverageReporter: {
      reporters: [
        {
          type: 'json',
          dir: 'coverage/json',
          subdir: '.'
        }
      ]
    }
  };

  config.set(_config);
};
