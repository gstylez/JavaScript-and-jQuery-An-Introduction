//$(document).ready(function() {   //The most import function, document is ready for manipulation
$( function() { //Simpler syntax for document ready, Passing a function
	$("div > p").css( "border", "3px solid red" ); //Passing CSS Selector
	$('.sampleList > li > a').click(function() {
		$(this).css("background-color","red"); //Passing object (this)
	});
	//Passing html string
	$("<p>This is a <b>p</b> element created with jQuery.</p>").appendTo("#jQuery");
});