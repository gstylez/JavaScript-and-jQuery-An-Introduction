//$(document).ready(function() {   //Older syntax, document is ready for manipulation
$( function() { //Simpler syntax for document ready
	$("#divJS").text($('body').text()); //Find element having id divJS, display text in body
	//text() --> gets text from selected elements, text(strText) --> sets strText to selected element
	$("#btnClick").click(function(){ //Select button btnClick and add click event
		alert("Text box entry = " + $("#txtInput").val()); //Selects txtInput and gets the value
		});
});