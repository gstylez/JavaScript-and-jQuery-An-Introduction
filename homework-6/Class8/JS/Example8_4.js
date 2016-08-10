document.addEventListener("DOMContentLoaded", function() {
	document.body.addEventListener('mouseover',function(event){handler(event);});
	document.body.addEventListener('mouseout',function(event){handler(event);});	
});
function handler(e) {
  if (e.type == 'mouseover') { //event type mouseover (mouse enter)
    //older syntax: fromElement, srcElement  new syntax: Target, relatedTarget
	var fromElem = e.fromElement || e.relatedTarget; 
    var toElem = e.srcElement || e.target;
  } 
  else if (e.type == 'mouseout') { //event type mouseout
    fromElem = e.srcElement || e.target;
    toElem = e.toElement || e.relatedTarget;
  }
  //Nested function
	function str(el) { //Display if element ID or nodeName exist, otherwise 
		return el ? (el.id || el.nodeName) : 'Unknown' ;
	}
  //div element id is named after mouse event type
  document.getElementById(e.type).innerHTML = "From " + str(fromElem) + " to " + str(toElem);
}