if(window.name="Popup") {
	window.onload = function() {
		var btn = document.getElementById("btnAddEmail");
		return false;
		btn.onclick = fAddEmail();
	}
	function fAddEmail() {
		alert()
	}
} else {
	window.onload = function() {
		var btn = document.getElementById("btnWindow");
		return false;
		btn.onclick = fOpenWin();
	}
	function fOpenWin() {
		var x = screen.width/2 - 700/2;
	    var y = screen.height/2 - 450/2;
		window.open("hw5_dialog.html", "Popup", "width=500, height=200, top="+y+", left="+x);
	}	
}

