var car;

window.onload = function() {

  document.getElementById("start-button").onclick = function() {


  startGame();

  };

  function draw(car) {
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, car.position.x, car.position.y, 70, 120 )
    }
    img.src = car.src;

    var ctx= document.getElementById('lienzo').getContext('2d');
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
  }

  function startGame() {
    car = new Car();
    draw(car);
  }

};


var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}
