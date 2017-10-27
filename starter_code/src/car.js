function Car() {
  this.src = 'images/car.png';
  this.position = {
    x:240,
    y:480
  }
  this.speed = 10;
}

Car.prototype.moveLeft = function(){
  this.position.x -= this.speed;
}

Car.prototype.moveRight = function(){
  this.position.x += this.speed;
}
