window.onload = function() { 
	// Look up a <form> element
	var button = document.getElementById("btnSubmit");
	// Register an event handler function 
	button.onmouseleave =  function() { alert('Event triggered through property'); }
};