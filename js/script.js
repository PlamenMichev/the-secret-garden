//butterfly movement
const butterfly = document.querySelector("#butterfly");
let leftPosition = 1;
let topPosition = 1;

let leftIncrement = getRandomDirection();
let topIncrement = getRandomDirection();

setInterval(function () {
  const rect = butterfly.getBoundingClientRect();
  const isGoingOffscreenTop = rect.x < -50;
  const isGoingOffscreenLeft = rect.y < -50;
  const isGoingOffscreenRight = rect.x > window.innerWidth - 230;
  const isGoingOffscreenBottom = rect.y > window.innerHeight - 150;
  console.log("top", isGoingOffscreenTop);
  console.log("left", isGoingOffscreenLeft);
  console.log("right", isGoingOffscreenRight);
  console.log("bot", isGoingOffscreenBottom);
  
  if (isGoingOffscreenLeft || isGoingOffscreenBottom) {
    topIncrement = -topIncrement;
  }

  if (isGoingOffscreenRight || isGoingOffscreenTop) {
    leftIncrement = -leftIncrement;
  }

  // setInterval(() => {
    if (Math.random()*2 < 0.10) {
      leftIncrement = getRandomDirection();
      topIncrement = getRandomDirection();
    }
    
  // }, 200);
  
  leftPosition += leftIncrement;
  topPosition += topIncrement;
  moveButterfly(leftPosition, topPosition);
}, 25);

const moveButterfly = function (x, y) {
  butterfly.style.left = x + "px";
  butterfly.style.top = y + "px";
};

function getRandomDirection() {
  return Math.random() > 0.5 ? Math.floor(Math.random()*10) : -Math.floor(Math.random()*10); // Randomly choose either 1 or -1
}

 function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

// //net movement
$(document).on('mousemove', function(e){
   $('#net').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

//watering can rotation and waterdrops + flowers

var rotation = 0;
$('.waterdrop').hide();
$('#flower').hide();

const wateringcan = document.querySelector("#wateringcan");
let rec = wateringcan.getBoundingClientRect();

const x2 = rec.x;
const y2 = rec.y;
const height2 = rec.height;

setInterval(function drop() {
  rand = getRandomInt(10);
  $('.waterdrop').css({top: y2+height/10, left: x2-rand, position: 'absolute'})
  $('.waterdrop').animate({top: screen.height, left: x2-rand});
},750);

$('#flower').css({bottom: 0, left: x2 - 100, position: 'absolute'});

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('#wateringcan').click(function() {
    console.log(rotation);
    if(rotation == 0) 
    {
      rotation = -25;
      $('.waterdrop').show();
      $('#flower').hide();
    }
    else if(rotation == -25)
    {
      rotation = 0;
      $('.waterdrop').hide();
      $('#flower').show();
    }
    $(this).rotate(rotation);
    drop();
});

//apple positioning
const tree = document.querySelector("#tree");
let rect = tree.getBoundingClientRect();

const apple1 = document.querySelector("#apple1");
const apple2 = document.querySelector("#apple2");
const apple3 = document.querySelector("#apple3");

let x = rect.x;
let y = rect.y;
let height = rect.height;
let width = rect.width;

apple1.style.left = (width/5 + getRandomInt(width/2) + x) + "px";
apple2.style.left = (width/5 + getRandomInt(width/2) + x) + "px";
apple3.style.left = (width/5 + getRandomInt(width/2) + x) + "px";

apple1.style.top = (getRandomInt(height/2) + y + height/11) + "px";
apple2.style.top = (getRandomInt(height/2) + y + height/11) + "px";
apple3.style.top = (getRandomInt(height/2) + y + height/11) + "px";

//woodpecker
$('#woodpecker').hide();

const wood = document.querySelector("#wood");
wood.style.left = (x + width/2.4) + "px";
wood.style.top = (y + height/1.5) + "px";

$('#woodpecker').css({left: x + width/2.4, top: y + height/2, position: 'absolute'});

$('#wood').hover(function(){
  $('#woodpecker').show();
}, function(){
  $('#woodpecker').hide();
});

//apple movement
const basket = document.querySelector(".basket");
let rect1 = basket.getBoundingClientRect();

let x1 = rect1.x;
let y1 = rect1.y;
let height1 = rect1.height;
let width1 = rect1.width;

$('#apple1').click(function(){
  $('#apple1').animate({top: y1 + height1/2, left: x1 + width1/(getRandomInt(10)+2)});
})

$('#apple2').click(function(){
  $('#apple2').animate({top: y1 + height1/2, left: x1 + width1/(getRandomInt(10)+2)});
})

$('#apple3').click(function(){
  $('#apple3').animate({top: y1 + height1/2, left: x1 + width1/(getRandomInt(10)+2)});
})

//changing background color
document.body.style.backgroundColor = 'aqua';

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if(document.body.style.backgroundColor == 'aqua')
    {
        document.body.style.backgroundColor = '#00008B';
        $("#apple1").attr('src',"images/apple_night.png");
        $("#apple2").attr('src',"images/apple_night.png");
        $("#apple3").attr('src',"images/apple_night.png");
        $("#flower").attr('src',"images/flower_night.png");
    }
    else
    {
        document.body.style.backgroundColor = 'aqua';
        $("#apple1").attr('src',"images/apple.png");
        $("#apple2").attr('src',"images/apple.png");
        $("#apple3").attr('src',"images/apple.png");
        $("#flower").attr('src',"images/flower_day.png");
    }
  }
});



