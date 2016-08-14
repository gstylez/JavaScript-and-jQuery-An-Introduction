function fDisplayEmphasize(elt){
	elt.classList.add("emphasize");	
}
function fDisplayNormal(elt){
	elt.classList.remove("emphasize");	
}

document.addEventListener("DOMContentLoaded", function(event) {
	var btn = document.getElementById("btnWakeMeUp");
	var pImportant = document.getElementById("pImportant");
	btn.addEventListener('click', function(){fDisplayEmphasize(pImportant);});
	btn = document.getElementById("btnNormal");
	btn.addEventListener('click', function(){fDisplayNormal(pImportant);});
});