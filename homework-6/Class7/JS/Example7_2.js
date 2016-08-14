function fDisplayCompStyle(){
	var element = document.getElementById("d1");
	var compStyleProperty = window.getComputedStyle(element).getPropertyValue("background-color");
	//Or without using getPropertyValue
	var compStyleProperty = window.getComputedStyle(element).backgroundColor;
	alert("The Computed Style Property = " + compStyleProperty);
}
function fDisplayStyle(){
	var element = document.getElementById("d1");
	alert("The Element Style Property = " + element.style["backgroundColor"]);
}
document.addEventListener("DOMContentLoaded", function(event) {
	var btn = document.getElementById("btnGetComputedStyle");
	btn.onclick = fDisplayCompStyle;
	btn = document.getElementById("btnGetStyle");
	btn.onclick = fDisplayStyle;
});