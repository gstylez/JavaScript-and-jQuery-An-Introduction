document.addEventListener("DOMContentLoaded", function(event) {
	var txt = document.getElementById("txtUsername");
	txt.addEventListener('onfocus', function(){fTextInputGetFocus});
	txt.addEventListener('onblur', function(){fTextInputLostFocus});

	function fTextInputGetFocus() {
		if(txt.value == 'Enter Username') {
			alert('test');
			txt.value = "";
			txt.style.border = "2px solid red";
		} else {
			return true;
		}
	}

	function fTextInputLostFocus() {
	
	}
});