//butterfly movement
const net = document.querySelector("#net");
const butterfly = document.querySelector("#butterfly");
let leftPosition = 1;
let topPosition = 1;

let leftIncrement = 1;
let topIncrement = 1;

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

  leftPosition += leftIncrement;
  topPosition += topIncrement;
  moveButterfly(leftPosition, topPosition);
}, 25);

const moveButterfly = function (x, y) {
  butterfly.style.left = x + "px";
  butterfly.style.top = y + "px";
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//net movement
$(document).on('mousemove', function(e){
   $('#net').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

//watering can rotation
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('#wateringcan').click(function() {
    console.log(rotation);
    if(rotation == 0) rotation = -25;
    else if(rotation == -25) rotation = 0;
    $(this).rotate(rotation);
});

//apple positioning

const apple1 = document.querySelector("#apple1");
const apple2 = document.querySelector("#apple2");
const apple3 = document.querySelector("#apple3");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

apple1.style.left = (getRandomInt(screenWidth/2.55)+screenWidth/1.75) + "px";
apple2.style.left = (getRandomInt(screenWidth/2.55)+screenWidth/1.75) + "px";
apple3.style.left = (getRandomInt(screenWidth/2.55)+screenWidth/1.75) + "px";

apple1.style.top = getRandomInt(screenHeight/3.35) + "px";
apple2.style.top = getRandomInt(screenHeight/3.35) + "px";
apple3.style.top = getRandomInt(screenHeight/3.35) + "px";

//apple movement

$('#apple1').click(function(){
  $('#apple1').animate({top: 460, left: 300});
})

$('#apple2').click(function(){
  $('#apple2').animate({top: 460, left: 350});
})

$('#apple3').click(function(){
  $('#apple3').animate({top: 460, left: 400});
})
