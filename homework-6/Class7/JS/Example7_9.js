document.addEventListener("DOMContentLoaded", function(event) {
var elem = document.getElementById('box'),
    startTime = null,
    endPos = 500, // in pixels
    duration = 2000; // in milliseconds
 
function render(time) {
  if (time === undefined) {
    time = new Date().getTime();
  }
  if (startTime === null) {
    startTime = time;
  }
  elem.style.left = ((time - startTime) / duration * endPos % endPos) + 'px';
}
	elem.onclick = function() {
	  (function animationLoop(){
		  debugger;
		render();
		requestAnimationFrame(animationLoop, elem);
		//setInterval(animationLoop,200)
	  })();
	};	
});