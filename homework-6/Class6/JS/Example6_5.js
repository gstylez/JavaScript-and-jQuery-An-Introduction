//Getting text content within <b> tags
function GetBoldElements () {
	var container = document.getElementById("container");
	var boldTags = container.getElementsByTagName("b");
	alert ("There are " + boldTags.length + " bold elements in the container.");
	for (var i = 0; i < boldTags.length; i++) {
		var boldTag = boldTags[i];
		alert ("The contents of the " + (i + 1) + ". bold element are\n" + boldTag.innerHTML);
	}
};
// Return the plain-text content of element e, recursing into child elements.
// This method works like the textContent property
function textContent(e) {
	var child, type, s = ""; // s holds the text of all children
	for(child = e.firstChild; child != null; child = child.nextSibling) {
		type = child.nodeType;
		if (type === 3 || type === 4) // Text and CDATASection nodes
			s += child.nodeValue; //Node value holds content of text node
		else if (type === 1) // Recurse for Element nodes
		s += textContent(child);
	}
return s;
};
//When DOM is ready
document.addEventListener('DOMContentLoaded', function(){
	alert(textContent(document.getElementById("container")))
	}
);