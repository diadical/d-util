// build modules
var funnel = require('broccoli-funnel'),
  concat = require('broccoli-concat'),
  mergeTrees = require('broccoli-merge-trees'),
  babel = require('broccoli-babel-transpiler');

var appJs = funnel('src', {
  include: ['**/*.js']
});
appJs = babel(appJs, {
  modules: 'amd',
  moduleIds: true
});
appJs = concat(appJs, {
  inputFiles: ['**/*.js'],
  outputFile: '/d-util.js'
});

module.exports = appJs;
