function fEditStylesheet(){
	//Does not work in chrome when used on file system!!
	var ss = document.styleSheets[0]; // Get the first stylesheet 
	//check whether cssRules is supported, otherwise use rules
	var rules = ss.cssRules?ss.cssRules:ss.rules; // Get the stylesheet rules
	for(var i = 0; i < rules.length; i++) { // Loop through those rules
		var rule = rules[i];
		if (!rule.selectorText) continue; // Skip @import and other nonstyle rules
		var selector = rule.selectorText; // The selector
		var ruleText = rule.style.cssText; // The styles, in text form
		// If the rule applies to h1 elements, apply it to h2 elements as well
		// Note this only works if the selector is literally "h1"
		if (selector == "h1") {
			if (ss.insertRule) ss.insertRule("h2 {" + ruleText + "}", rules.length);
			else if (ss.addRule) ss.addRule("h2", ruleText, rules.length);
		}
		// If the rule sets the text-decoration property, delete it.
		if (rule.style.textDecoration) {
			if (ss.deleteRule) ss.deleteRule(i);
			else if (ss.removeRule) ss.removeRule(i);
			i--; // Adjust the loop index since the former rule i+1 is now rule i
		}
	}
}	
document.addEventListener("DOMContentLoaded", function(event) {
	var btn = document.getElementById("btnEditStyleSheet");
	btn.onclick = fEditStylesheet;
});