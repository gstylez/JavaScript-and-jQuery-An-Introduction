document.addEventListener("DOMContentLoaded", function() {
	var txtI = document.getElementById('keyInput'); //Get reference to input element
	var area = document.forms[0].getElementsByTagName('textarea')[0]; //Get reference to textarea element
	//Registering event listener for keyboard events and clear button
	txtI.addEventListener('keydown', function(event){fKeyHandle(event);});
	txtI.addEventListener('keyup', function(event){fKeyHandle(event);});
	txtI.addEventListener('keypress', function(event){fKeyHandle(event);});
	document.getElementById('btnClear').addEventListener('click', function() {fLogClear();});
	function fKeyHandle(e) { //Event handler for keyboard events
	  if (document.forms.keyform[e.type + 'Ignore'].checked) return; //For checked ignore event type, simply return here
	  var evt = e.type; //Store event type in variable
	  while (evt.length < 10) evt += ' '; //Padding blank spaces to achieve uniform length for alignment
	  //Assembling log message
	  fShowMsg(evt + ' keyCode=' + e.keyCode + ' which=' + e.which + ' charCode=' + e.charCode +
		' char=' + String.fromCharCode(e.keyCode || e.charCode) +
		(e.shiftKey ? ' +shift' : '') + (e.ctrlKey ? ' +ctrl' : '') + (e.altKey ? ' +alt' : '') + (e.metaKey ? ' +meta' : '')
	  );
	  //If checked for each type, return false to prevent default bahavior
	  if (document.forms.keyform[e.type + 'Stop'].checked) { 
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	  }
	}
	var timer=0;//Initializing global timer
	function fShowMsg(logText){ //function to display log information
		//Assigning current date/time into global timer if timer = 0
		if(timer==0) timer=new Date(); //Initializing local timer variable
		var tm = new Date();//Initializing local timer variable
		//Display horizontal line in output if more than 300ms have passed
		if(tm-timer > 300) logText='------------------------------\n' + logText;
		area.value += logText + '\n'; //Add line break after logText
		//If output is taller than height of textarea then scroll to bottom
		area.scrollTop = area.scrollHeight;
		timer = tm; //Setting timer and tm to equal values
	}
	function fLogClear(){ //Function to clear values from textarea
		timer=0; //Reset global variable timer
		area.value=''; //Clearing textarea element
		txtI.value=''; //Clearing input element
	}
});