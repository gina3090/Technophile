var gameConsole = require('./GameConsole.js');
var webBrowser = require('./WebBrowser.js');

function NintendoDS() {
  gameConsole.call(this, 'Nintendo DS');
}

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(NintendoDS, gameConsole);
extend(NintendoDS, webBrowser);

module.exports = NintendoDS;