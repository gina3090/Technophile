var phone = require('./Phone.js');
var tablet = require('./Tablet.js');
var gameConsole = require('./GameConsole.js');
var webBrowser = require('./WebBrowser.js');


function SmartPhone(phoneNumber) {
  phone.call(this, phoneNumber);
  gameConsole.call(this, 'Smart Phone');
}

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(SmartPhone, phone);
extend(SmartPhone, tablet);
extend(SmartPhone, gameConsole);
extend(SmartPhone, webBrowser);

module.exports = SmartPhone;