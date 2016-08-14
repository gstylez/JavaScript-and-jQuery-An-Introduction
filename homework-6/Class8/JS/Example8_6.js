document.addEventListener("DOMContentLoaded", function() {
	//Get reference to textarea element
	var area = document.getElementById("mouseoverlog");
	//Get reference to div parent element
	var div = document.getElementById("divParent");
	//Registering event listeners for mouseover and mouseout on divParent element
	div.addEventListener('mouseover', function(event){fLogMouseOver(event,this,area);});
	div.addEventListener('mouseout', function(event){fLogMouseOver(event,this,area);});	
	//Get reference to Clear button
	var btn = document.getElementById("btnClear");	
	//Registering event listener for click event on clear button
	btn.addEventListener('click', function(){area.value='';});
	//Get reference to div Box element
	var div = document.getElementById("divBox");
	//Registering event listeners for mouseenter and mouseleave on divBox element
	//Those events do not bubble, hence are not fired for child elements 
	//replace mouseenter with mouseleave, mouseleave with mouseout to see the difference
	div.addEventListener('mouseenter',function(event){fMouseEnterLeave(event,this);});
	div.addEventListener('mouseleave', function(event){fMouseEnterLeave(event,this);});		
});
function fLogMouseOver(event, element, textarea) {
	//Update textarea element with event information
	textarea.value += event.type + ' ' + element.lassName + ' [target: ' + (event.target||event.srcElement).className + ']\n';
	textarea.scrollTop = textarea.scrollHeight; //Scroll to the bottom if text entry is larger than height
}
function fMouseEnterLeave(event, element){
	//Update next element with current date/time and event type
	element.nextElementSibling.innerHTML = new Date() + ' ' + event.type;
}