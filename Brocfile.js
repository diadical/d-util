// build modules
var pkg = require('./package.json'),
  funnel = require('broccoli-funnel'),
  concat = require('broccoli-concat'),
//  mergeTrees = require('broccoli-merge-trees'),
  babel = require('broccoli-babel-transpiler');

var appJs = funnel('src', {
  include: [
    '**/*.js'
  ],
  exclude: [
    '**/*.spec.js',
    '**/*.test.js'
  ]
});
appJs = babel(appJs, {
  modules: 'amd',
  moduleIds: true
});
appJs = concat(appJs, {
  inputFiles: ['**/*.js'],
  outputFile: '/' + pkg.name + '.js'
});

module.exports = appJs;
