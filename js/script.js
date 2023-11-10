//butterfly movement
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
}, 2);

const moveButterfly = function (x, y) {
  butterfly.style.left = x + "px";
  butterfly.style.top = y + "px";
};

function getRandomInt(max) {
  return (Math.random() + 1) * max;
}

//net movement
$(document).on('mousemove', function(e){
   $('#net').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

//bucket rotation
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

