
window.onload = function() {
	var btn = document.getElementById("btnWindow");
	btn.onclick = fOpenWin();
}
function fOpenWin() {
	window.open("Popup", "width=500, height=200");
}
