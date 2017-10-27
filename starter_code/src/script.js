window.onload = function() {
  var car = new Car();
  var img = new Image();
  var keys = {
    LEFT: 37,
    RIGHT: 39
  }

  img.src = car.src;
  var ctx= document.getElementById('lienzo').getContext('2d');

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.onkeydown = function(e){
    switch (e.keyCode) {
      case keys.LEFT:
        car.moveLeft();
        draw();
        break;
      case keys.RIGHT:
        car.moveRight();
        draw();
        break;
    }
  }

  function startGame() {
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle="#3e8305";
    ctx.fillRect(0, 0,450,600);

    ctx.fillStyle="#808080";
    ctx.fillRect(70, 0,310,600);

    ctx.save();
    ctx.lineWidth = 4;
    ctx.strokeStyle="#fff";
    ctx.beginPath();
    ctx.moveTo(90,0);
    ctx.lineTo(90,600);

    ctx.moveTo(360,0);
    ctx.lineTo(360,600);
    ctx.stroke();

    ctx.setLineDash([40])
    ctx.moveTo(228, 0);
    ctx.lineTo(228, 600);
    ctx.stroke();
    ctx.restore();
    ctx.drawImage(img, car.position.x, car.position.y, 70, 120 )
  }
};
