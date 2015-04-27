var Promise = require('ember-cli/lib/ext/promise');

var chalk  = require('chalk');
var yellow = chalk.yellow;
var blue   = chalk.blue;

module.exports = function(ui, config) {
  ui.write(blue('|    '));
  ui.writeLine(blue('- validating config'));

  var defaultConfig = {
    fileInputPattern: 'dist/index.html',
    fileOutputPattern: 'dist/index.json'
  };

  ['fileInputPattern', 'fileOutputPattern'].forEach(function(prop) {
    if (!config[prop]) {
      var value = defaultConfig[prop];
      config[prop] = value;
      ui.write(blue('|    '));
      ui.writeLine(yellow('- Missing config: `' + prop + '`, using default: `' + value + '`'));
    }
  });

  return Promise.resolve();
}
