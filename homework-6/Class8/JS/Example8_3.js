document.addEventListener("DOMContentLoaded", function() {
	//Reference to textarea element for logging purposes
	var area = document.getElementById("txtLogMouseEvents");
	//Reference to logging button
	var btn = document.getElementById("btnLogMouse");
	//Registering mouse events and calling fLogMouse function
	btn.addEventListener('click',       function(event){fLogMouse(event,area);});
	btn.addEventListener('mousedown',   function(event){fLogMouse(event,area);});	
	btn.addEventListener('mouseup',     function(event){fLogMouse(event,area);});	
	btn.addEventListener('contextmenu', function(event){fLogMouse(event,area);});
	btn.addEventListener('dblclick',    function(event){fLogMouse(event,area);});
	//Reference to Clear button and registering click event for clearing log
	var btn = document.getElementById("btnClear");	
	btn.addEventListener('click', function(){fLogClear(area);});	
});
var timer = 0; //Initializing global timer
//Function for formatting output in textarea element
function fShowMsg(logText,textarea){
	//Assigning current date/time into global timer if timer = 0
	if(timer == 0) timer = new Date(); 
	var tm = new Date(); //Initializing local timer variable
	if(tm - timer > 300){ //Display horizontal line in output if more than 300ms have passed
			logText = '------------------------------\n' + logText;
	}
	textarea.value += logText + '\n'; //Add line break after logText
	//If output is taller than height of textarea then scroll to bottom
	textarea.scrollTop = textarea.scrollHeight; 
	timer = tm; //Setting timer and tm to equal values
}
//Function for logging mouse events
function fLogMouse(e,textarea){
	var evt = e.type; //event type description
	while(evt.length < 11) evt += ' '; //padding blank space 10 characters total
	fShowMsg(evt + " which=" + e.which + " button=" + e.button,textarea); //Display event info
}
//Function for clearing textarea element
function fLogClear(textarea){
	timer = 0; //Resetting timer to 0
	textarea.value = ''; //Clearing textarea element
}