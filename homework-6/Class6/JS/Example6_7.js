/*
* Creates a table of contents for a document based on h headings
* First it creates a document element with an id of "TOC"
* at the start of the document (unless it already exists).
* Search all <h1> through <h6> tags, 
* creates a table of contents within the TOC element. 
* It adds section numbers to each section heading
* and wraps the headings in named anchors so that the TOC can link to them.
*/
document.addEventListener('DOMContentLoaded', function() { // Anonymous function defines a local scope
	// Create TOC container element if it does not already exist
	//debugger; //turn on if needed
	var toc = document.getElementById("TOC");
	if (!toc) {
		toc = document.createElement("div");
		toc.id = "TOC";
		toc.innerHTML = "TABLE OF CONTENTS";
		document.body.insertBefore(toc, document.body.firstChild);
	}
	// Find all section heading elements
	var headings;
	if (document.querySelectorAll) // Is querySelectorAll supported by the browser
		headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
	else // Otherwise, recursively loop over entire document to find h headings
		headings = findAllHeadings(document.body, []);
		// Recursively traverse the document body looking for headings
		function findAllHeadings(root, sects) {
			for(var c = root.firstChild; c != null; c = c.nextSibling) {
				if (c.nodeType !== 1) continue;
				if (c.tagName.length == 2 && c.tagName.charAt(0) == "H")
					sects.push(c); //Adding node object to array
				else 
					findAllHeadings(c, sects); //Recursively call same function again
			}
			return sects; //Return array of all H headings found
		}
	// Initialize an array that keeps track of section numbers 1 through 6.
	var sectionNumbers = [0,0,0,0,0,0];
	// Now loop through the section header elements we found.
	for(var h = 0; h < headings.length; h++) {
		var heading = headings[h];
		// Skip the section heading if it is inside the TOC container.
		if (heading.parentNode == toc) continue;
		// Figure out what level heading it is.
		var level = parseInt(heading.tagName.charAt(1)); //Second character position
		//If character found is not a number or not between 1 and 6, continue loop
		if (isNaN(level) || level < 1 || level > 6) continue; 
		// Increment the section number for this heading level
		sectionNumbers[level-1]++;
		// Reset all lower heading (relative to current heading) level numbers to zero.		
		for(var i = level; i < 6; i++) sectionNumbers[i] = 0;
		// Now combine section numbers for all heading levels
		// to produce a section number like 2.3.1.
		var sectionNumber = sectionNumbers.slice(0,level).join(".")
		// Add the section number to the section header title.
		// We place the number in a <span> to make it styleable.
		var span = document.createElement("span");
		span.className = "SectionNum"; 
		span.innerHTML = sectionNumber; 
		heading.insertBefore(span, heading.firstChild);
		// Wrap the heading in a named anchor so we can link to it.
		var anchor = document.createElement("a");
		anchor.name = "TOC"+sectionNumber; 
		heading.parentNode.insertBefore(anchor, heading);
		anchor.appendChild(heading);
		// Now create a link to this section.
		var link = document.createElement("a");
		link.href = "#TOC" + sectionNumber; // Link destination
		link.innerHTML = heading.innerHTML; // Link text is same as heading
		// Place the link in a div that is styleable based on the level.
		var entry = document.createElement("div");
		entry.className = "TOCLevel" + level; 
		entry.appendChild(link);
		// And add the div to the TOC container.
		toc.appendChild(entry);
	}
	//Get entire page source code into a string for verification purposes
	console.log(document.getElementsByTagName("html")[0].innerHTML);
});