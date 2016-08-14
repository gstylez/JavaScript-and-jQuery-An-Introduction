window.onload = function() { 
	// Look up a buttons
	var button = document.getElementById("btnClick");
	var remove = document.getElementById("btnRemove");
	// Defining the external functions
	function fAlert1(){alert("Thanks again!");};
	function fAlert2(){alert("Thanks again once more!");};			
	//Adding event handler through property
	button.onclick =  function() { alert('Thanks for clicking!'); }
	//Adding two event handlers through addEventListener method
	button.addEventListener("click", fAlert1);
	button.addEventListener("click", fAlert2);
	//Remove third event handler by clicking on Remove button
	remove.addEventListener("click", function() { button.removeEventListener("click", fAlert2); alert('Removed'); });
};

