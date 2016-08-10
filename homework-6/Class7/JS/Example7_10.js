document.addEventListener("DOMContentLoaded", function(event) {
	var imgCircle = document.querySelector("#imgCircle");
	var currentPos = 0;
	var requestAnimationFrame = window.requestAnimationFrame;
	var angle = 0;
	var incrementer = .1;
	
	function fMoveItem() {
		currentPos += 5;
		angle += incrementer;
		 
		imgCircle.style.left = currentPos + 5 * Math.cos(angle) + "px";
		imgCircle.style.top = 25 + 50 * Math.sin(angle) + "px";
		 
		if (Math.abs(currentPos) >= 900) {
			currentPos = -500;
			incrementer = .05 + Math.random() / 2;
		}
		 
		if (angle > 2 * Math.PI) {
			angle = 0;
		}
		requestAnimationFrame(fMoveItem);
	}
	fMoveItem();
});