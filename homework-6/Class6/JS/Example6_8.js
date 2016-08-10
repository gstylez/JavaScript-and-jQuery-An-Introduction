document.addEventListener("DOMContentLoaded", function(event) {
		var arrCountries = ["England", "USA", "Mexico", "Canada", "Brazil", "Zaire"];
		//Defining SELECT object variable to be used in loop
		var objSelect;
		//Sorting the array first
		arrCountries.sort();
		for (i=0 ;i < arrCountries.length; i++){
			//Alert output of sorted countries
			alert('Country ' + i + ' = ' + arrCountries[i]);
			objSelect = new Option(arrCountries[i], // The text property
			i+1, // The value property
			false, // The defaultSelected property
			false); // The selected property
			// Display it in a Select element by appending it to the options array:
			var countries = document.frmCountries.ddlCountries; // Get the Select object
			//Adding countries to existing drop-down list
			countries.options[countries.options.length] = objSelect;
		}
		console.log(document.body.innerHTML);
	}
);