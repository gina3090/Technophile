function Tablet() {

}

Tablet.prototype.touch = function(x, y) {
  this.x = x;
  this.y = y;
  return {
    x: this.x,
    y: this.y
  };
};

module.exports = Tablet;