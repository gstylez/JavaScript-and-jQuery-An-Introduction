document.addEventListener("DOMContentLoaded", function() {
	//Get references for two input and a slider input
    var txtIB = document.getElementById("txtInputBefore");
    var txtIA = document.getElementById("txtInputAfter");	
    var sldP = document.getElementById("sldPrice");	
	//Get references to div elements
	var divIB = document.getElementById("divInputBefore");
	var divCB = document.getElementById("divCountBefore");
	var divIA = document.getElementById("divInputAfter");
	var divCA = document.getElementById("divCountAfter");
	//Register event listeners on input
	txtIB.addEventListener('keypress', function(){fInput(this, divIB, divCB)}); //Firefox
	txtIB.addEventListener('textInput', function(){fInput(this, divIB, divCB)});//Chrome
	txtIA.addEventListener('input', function(){fInput(this, divIA, divCA)});//Universal	
    //Register event listeners in slider input
	sldP.addEventListener('input', function(){return fSlider()});
	//Registering focus event at document level using capturing phase
	document.addEventListener('focus',fGotFocus, true);
	function fGotFocus(event){ //Resetting value of elements that can receive focus
		event.target.value=''; //Using event object to get reference to actual target element
	}
	function fInput(element, divI, divC){ //Function for text input
		//Change input to uppercase
		//Display text input in div element
		divI.innerHTML = "You entered (converted to uppercase): " +  element.value.toUpperCase();
		divC.innerHTML = "Number of characters: " +  element.value.length;
	};
	function fSlider(){ //Function for slider input
		document.getElementById("divPrice").innerHTML = "How much does it cost?: " +  sldP.value;	
	};
});