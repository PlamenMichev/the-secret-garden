//MAKE THE MAGIC HAPPEN

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
}, 1);

const moveButterfly = function (x, y) {
  butterfly.style.left = x + "px";
  butterfly.style.top = y + "px";
};

function getRandomInt(max) {
  return (Math.random() + 1) * max;
}

//
