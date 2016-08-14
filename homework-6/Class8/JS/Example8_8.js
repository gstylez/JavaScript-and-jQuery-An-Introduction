document.addEventListener("DOMContentLoaded", function() {
	var clock = document.getElementById("clock"); // The clock element
	fStartDragDrop(); //Setting up drag and drop functionality

function fStartDragDrop(){
	var icon = new Image(); // Create new image to drag
	icon.src = "Images/clock-icon.png"; // Set source to image URL
	displayTime(clock);// Display the time once every minute
	// Make the clock draggable
	// We can also do this with an HTML attribute: <span draggable="true">...
	clock.draggable = true;
	// Set up drag event handlers
	clock.ondragstart = function(event) {
		var event = event || window.event; // For IE compatability
		// The dataTransfer property is key to the drag-and-drop API
		var dt = event.dataTransfer;
		// Tell the browser what is being dragged.
		// The Date() constructor used as a function returns a timestamp string
		dt.setData("Text", Date() + "\n");
		// Tell the browser to drag our icon to represent the timestamp, in
		// browsers that support that. Without this line, the browser may
		// use an image of the clock text as the value to drag.
		if (dt.setDragImage) dt.setDragImage(icon, 0, 0); //Comment out this line to test without image
	};	
};
	function displayTime(eltClock) {
		var now = new Date(); // Get current date/time
		var hrs = now.getHours(), mins = now.getMinutes(); //Declare variables for hour and minute
		if (mins < 10) mins = "0" + mins; //Leading zero for single digit minutes
		eltClock.innerHTML = hrs + ":" + mins; // Display current time
		//Using third optional argument in setTimeout function for function parameters
		setTimeout(displayTime, 60000, eltClock); //Repeat every 60 seconds
	}
});