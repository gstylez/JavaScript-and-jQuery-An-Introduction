document.addEventListener("DOMContentLoaded", function(event) {
	
	var txt = document.getElementById("txtUsername");
	txt.addEventListener("focus", fTextInputGetFocus);
	txt.addEventListener("blur", fTextInputLostFocus);
	txt.addEventListener("input", fValidateUserName);
	fStartScrolling();

	function fTextInputGetFocus() {
		if(txt.value == 'Enter Username') {
			txt.value = "";
// 			txt.style.border = "2px solid grey";
		} else {
			return true;
		}
	}

	function fTextInputLostFocus() {
		if(txt.value.length == 0) {
			txt.value = "Enter Username";
		} else {
			txt.style.backgroundColor = "";
			return true;
		}
	}
	
	function fValidateUserName() {
		var spn = document.getElementById("spnCount");
		var count = txt.value.length;
		spn.innerHTML = "Count of Characters =" + " " + count;
		switch(true) {
			case count < 6:
				txt.style.backgroundColor = "red";
				break;
			case count < 13:
				txt.style.backgroundColor = "green";
				break;
			case count < 21:
				txt.style.backgroundColor = "orange";
				break;
			case count > 20:
				txt.style.backgroundColor = "red";
		}
	}
	
/*
	function fStartScrolling() {
		var msg, len, pos, pad, IpadMsg, pre;
		msg = "Enter a username having at least 6 characters and no more than 20";
		len = 25;
		pos = 0;
		pad = 
	}
*/
	
});