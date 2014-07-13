var canvas = document.createElement( "canvas" ),
    ctx = canvas.getContext('2d'),
    bgImage,
    animal = [],
    element = {},
    animate = {};    
    canvas.width = 1000;
    canvas.height = 300;
document.body.appendChild(canvas);

var imgSrc = {
  pesok: './img/pesok.jpg',
  humster_show:'./img/sprite_humster_revers.png',
  humster_hide:'./img/sprite_humster.png'
}; // спитати у Кочергина чому тут вини кає помилка коли ми забираємо кри=апку з комою


// групуємо ініцілізацію канфаса
(function(){
  bgImage = new Image();
  
  bgImage.src = imgSrc.pesok;
  bgImage.width = 1000;
  bgImage.height = 1000;

  bgImage.onload = function(){
     ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0, 1000, 1000);
  }

  element = {
    'w'   : 63,   
    'h'   : 87,   
    'fh'  : 90,   
    'x'   : 0,    
    'y'   : 0     
  }

})();



function Humster(view, x, y){

  var newImage = new Image();
  newImage.src = view == 'hide' ? imgSrc.humster_hide : imgSrc.humster_show;
  console.log(newImage.src)
  return {
    img    : newImage,
    x    : x || 0,
    y    : y || 0,
    speed  : 6,
    curr   : 0,
    steps  : 3,
    step   : 0,
    action : view,
    index  : 0 
  }
}


canvas.addEventListener('click',OnClick, false);

function OnClick(e){
  var posX = e.x,
      posY = e.y;

  var currentObj = animal.map(function(){
    return {
      el       : arguments[0], 
      elemPosX : arguments[0].x,
      elemPosY : arguments[0].y,
      maxX     : arguments[0].x + 63,
      maxY     : arguments[0].y + 87
    }
  });

  if( posX >= currentObj[0].elemPosX && 
      posX <= currentObj[0].maxX && 
      posY >= currentObj[0].elemPosY && 
      posY <= currentObj[0].maxY 
      ){
    imghide = currentObj[0].el
    imghide.img.src = imgSrc.humster_hide
    console.log(imghide)  
    //currentObj[0].el.imgSrc
    drawAnimation(imghide)
  }
}



function drawAnimation(ImageObj, x, y) {
  animal.push(ImageObj)

  getImage = ImageObj.img || null;
  console.log(getImage)
  var STEP = ImageObj.step;

  var animateInt = setInterval( function () {       

    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 600, 200);
    ctx.restore();                    
    
    ctx.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height, 0, 0, 1000, 1000);
    ctx.drawImage(
      getImage, 
      0, 
      Math.round(element.fh * STEP),
      element.w, 
      element.h, 
      ImageObj.x, 
      ImageObj.y, 
      element.w, 
      element.h
      );
    if (ImageObj.curr >= ImageObj.speed) {                                
        if (STEP >= ImageObj.steps) {
          clearInterval(animateInt) 
        }
        else  STEP++;
        ImageObj.curr = 0;
    }
    ImageObj.curr++;       
         
  }, 13);
}


drawAnimation(new Humster('show', 20))