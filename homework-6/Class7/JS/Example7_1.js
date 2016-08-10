//Without DOMContentLoaded script does not run since elements are not loaded yet.
document.addEventListener("DOMContentLoaded", function(event) {
	//Get references for button and div
	var square = document.getElementById("divSquare");
	var button = document.getElementById("btnChangeCSS");
	//Change color
	function doDemo () {
		//Disable button btnChangeCSS
		this.setAttribute("disabled", "true");
		//Change background color of square
		square.style.backgroundColor = "tan";
	}
	//Clear color 
	function clearDemo () {
		//Reset background color  
		square.style.backgroundColor = "transparent";
		//Enable button btnChangeCSS
		button.removeAttribute("disabled");
	}
	//Setting up onclick event on buttons
	button.onclick = doDemo; 
	document.getElementById("btnReset").onclick = clearDemo; 
});