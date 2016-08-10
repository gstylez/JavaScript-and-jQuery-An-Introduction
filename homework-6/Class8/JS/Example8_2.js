//Execute JavaScript code only when HTML document is loaded
//May also use event property document.load
document.addEventListener("DOMContentLoaded", function() {
	//Get reference to button
	var btn = document.getElementById("btnClick");
	//Register event listener
	btn.addEventListener('click', function(){return alert('This is JavaScript');});
});