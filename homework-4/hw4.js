//validate the file extension that is entered in the text input element
function fFileValidate() {
	var txt = document.getElementById("txtFilePath").value; //get value from input text
	var regExpression = /jpe?g|png|bmp?/gi; //expression to detect file format
	
	//if statement to test that the file name is valid
	if(regExpression.test(txt)) {
		alert("File Validation successful");
		return true;	
	} else {
		alert("File Name = " + txt + " is invalid");
		return false;
	};
};

//extract the query string from the URL and display it in an alert dialog box
function fQueryString() {
	var strQueryString = location.search; //get string from URL
	strQueryString = strQueryString.replace(/.+=/, ""); //expression to remove ?filepath= from string
	alert("Location = " + decodeURIComponent(strQueryString)); //alert showing only the image name
}