var watch = require('./Watch.js');
var tablet = require('./Tablet.js');

function SmartWatch() {
  watch.call(this);
}

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(SmartWatch, watch);
extend(SmartWatch, tablet);

module.exports = SmartWatch;