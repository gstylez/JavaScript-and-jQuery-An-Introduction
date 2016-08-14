function fdisableStylesheet(ss, elt) {
	var blnEnabled;
	if (typeof ss === "number"){
		var cssStyleSheet = document.styleSheets[ss];
		cssStyleSheet.disabled = blnEnabled = ! cssStyleSheet.disabled;
	} 
	else {
		var sheets = document.querySelectorAll(ss);
		for(var i = 0; i < sheets.length; i++)
			sheets[i].disabled = blnEnabled = ! sheets[i].disabled;
	}
	//Set button text based on whether stylesheet are enabled or disabled
	//Either use innerHTML (no markup anyway) or account 
	//for browser incompatibilies using innerText vs. textContent
	//elt.innerHTML = blnEnabled ? "Enable Stylesheets" : "Disable Stylesheets";	
	elt.innerText = elt.textContent = blnEnabled ? "Enable Stylesheets" : "Disable Stylesheets";
}	

document.addEventListener("DOMContentLoaded", function(event) {
	var btn = document.getElementById("btnEnableDisable");
	btn.addEventListener('click', function(){fdisableStylesheet(".SS", btn);});
});