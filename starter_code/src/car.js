function Car() {
  this.src = './images/car.png';
  this.position = {
    x:240,
    y:480
  }
}

Car.prototype.move = function() {
  this.moveLeft = keys.LEFT;
  this.moveRight = keys.RIGHT;
}
