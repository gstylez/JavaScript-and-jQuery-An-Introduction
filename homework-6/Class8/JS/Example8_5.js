document.addEventListener("DOMContentLoaded", function() {
	//Get reference to textarea element
	var area = document.getElementById("txtLogMouseMove");	
	//Get reference to div element
	var div = document.getElementById("divGreen");
	//Registering event listeners for mousemove, mouseover, and mouseout
	div.addEventListener('mousemove', function(event){return fLogMouseMove(event,area);});
	div.addEventListener('mouseover', function(event){return fLogMouseMove(event,area);});	
	div.addEventListener('mouseout' , function(event){return fLogMouseMove(event,area);});	
	//Get reference to clear button
	var btn = document.getElementById("btnClear");	
	//Registering event listener for click event on clear button
	btn.addEventListener('click', function(){fLogClear(area);});	
});
var timer = 0; //Initializing global timer variable
//Function for formatting output in textarea element
function fShowMsg(logText,textarea){
	if(timer==0) timer=new Date();//Assigning current date/time if timer = 0
	var tm = new Date();//Initializing local timer variable
	if(tm - timer > 300){//Display horizontal line in output if more than 300ms have passed
		logText = '------------------------------\n' + logText;
	}
	textarea.value += logText + '\n';//Add line break after logText
	//If output is taller than height of textarea then scroll to bottom
	textarea.scrollTop = textarea.scrollHeight;
	timer = tm;//Setting timer and tm to equal values
}
function fLogMouseMove(e, textarea){
	var evt=e.type;//event type description
	while(evt.length < 11) evt+=' ';//padding blank space 10 characters total
	fShowMsg(evt+ " target = " + (e.target).id,textarea);//Display event info
}
function fLogClear(textarea){
	timer = 0; //Resetting timer to 0
	textarea.value = ''; //Clearing textarea element
}