function faddStyles(styles) { //styles can be a string or object
	// First, create a new stylesheet
	var styleElt, styleSheet;
	if (document.createStyleSheet) { // If the IE API is defined, use it
		styleSheet = document.createStyleSheet();
	}
	else {
		var head = document.getElementsByTagName("head")[0];
		styleElt = document.createElement("style"); // New <style> element
		head.appendChild(styleElt); // Insert it into <head>
		// Now the new stylesheet should be the last one
		styleSheet = document.styleSheets[document.styleSheets.length-1];
	}
	// Now insert the styles into it
	if (typeof styles === "string") { //if string styles contains style rules
		// The argument is stylesheet text
		if (styleElt) styleElt.innerHTML = styles; 
		else styleSheet.cssText = styles; // The IE API
	}
	else { //If it is an object, then each property defines a style rule to be added to the stylesheet
		//Property names are selectors and their values are the corresponding styles
		var i = 0;
		for(selector in styles) {
			if (styleSheet.insertRule) {
				var rule = selector + " {" + styles[selector] + "}";
				styleSheet.insertRule(rule, i++);
			}
			else {
				styleSheet.addRule(selector, styles[selector], i++);
			}
		}
	}
}
document.addEventListener("DOMContentLoaded", function(event) {
	//Object containing CSS rules
	var obj = {"h2":"color: red","h1":"text-decoration: underline"};
	var btn = document.getElementById("btnCreateSS");
	//btn.addEventListener('click', function(){faddStyles("h2 {color: red;}");});
	btn.addEventListener('click', function(){faddStyles(obj);});	
});