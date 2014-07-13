
var opt = {
  good:   './good.png',
  bad: './bad.png',
  pesok: './pesok.jpg'
  // setInterval(draw,100);
}


var canvas = document.createElement("canvas"),
    ctx = canvas.getContext('2d');
    width = 400,
    height = 400,
    canvas.width = width,
    canvas.height = height;
    document.body.appendChild(canvas);
// // Add mousemove and mousedown events to the canvas
// canvas.addEventListener("mousemove", trackPosition, true);
// canvas.addEventListener("mousedown", btnClick, true);

// bg image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
  bgReady = true;
  ctx.drawImage( bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0, 400,400);
}
bgImage.src = opt.pesok


// bad humster

var humster = new Image();
function genareteHumster(view){
  console.log(view)
  if(view == 'bad'){
    humster.src = opt.bad;    
  }else if(view == 'good'){
    humster.src = opt.good;    
  }
}
genareteHumster('bad')

humster.onload = function(){
  draw(humster, 0, 0)
}
//add humster
var draw = function(humsterItem, x, y){
  // ctx.clearRect(0, 0, width, height);
  // ctx.drawImage( humsterItem , x, y);
  // ctx.restore();
  // ctx.drawImage( humsterItem , x, y);

  setInterval(function(){
    ctx.drawImage( humsterItem , x, 70)  
  },300);
  // ctx.restor();
  ctx.save();
}

var animateHumster = function(humsterItem, x, y){
  ctx.clearRect(0, 0, width, height ); // чистимо рмаку)) хз де вона має бути
  //clear whole surface
  ctx.beginPath();
  //start drawing
  
  //fill rectangle with active

  var flag = true;
  if(flag){
    setTimeout()( function(){
      ctx.drawImage( humsterItem , x, y-10)
    },20)
    flag = false
  }else{
    setTimeout()( function(){
      ctx.drawImage( humsterItem , x, y+10);
    },20)


    flag = true
  }
  ctx.rect(0, 0, width, height);
  //draw rectangle from point (0, 0) to
  //(width, height) covering whole canvas
  ctx.closePath();
  //end drawing
  ctx.fill();
}





var addBtn = document.getElementById("add");
addBtn.addEventListener("click", randomHumsterGen, true);
// addBtn.x`("mousedown", randomHumsterGen(), true);


function randomHumsterGen(){
  var randomizer = function(){ 
    return Math.floor(Math.random() * ((width >= height ? width : height) - 0 + 1)) + 0  
  }
  draw(humster, randomizer(), randomizer()) 
}

var addBtn = document.getElementById("add");
addBtn.addEventListener("click", randomHumsterGen(), true);
// humster.onmousemove("mousedown", btnClick, true);
// function btnClick(event){
//   console.log('asdasd')
//   alert(event)
// }


