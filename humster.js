// ctx.beginPath(); 


var opt = {
  good:   './good.png',
  bad: './bad.png',
  pesok: './pesok.jpg'
  // setInterval(draw,100);
}

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}


var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}

var charX = 245;
var charY = 185;
  
function redraw() {

  var x = charX;
  var y = charY;

  canvas.width = canvas.width; // clears the canvas 
                      
  context.drawImage(images["leftArm"], x + 40, y - 42);
  context.drawImage(images["legs"], x, y);
  context.drawImage(images["torso"], x, y - 50);
  context.drawImage(images["rightArm"], x - 15, y - 42);
  context.drawImage(images["head"], x - 10, y - 125);
  context.drawImage(images["hair"], x - 37, y - 138);
}