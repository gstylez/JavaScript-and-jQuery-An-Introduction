var self;
document.addEventListener("DOMContentLoaded", function() {
	var txtR = document.getElementById("txtRightClick");
	txtR.addEventListener('contextmenu', function(event){alert('Right-click without context menu!');event.preventDefault();});	
	var txtW = document.getElementById("txtWindow");
	txtW.addEventListener('mousemove', function(event){this.value = 'X = ' + event.clientX + '  Y = ' + event.clientY});
	var txtD = document.getElementById("txtDocument");
	txtD.addEventListener('mousemove', function(event){this.value = 'X = ' + event.pageX + '  Y = ' + event.pageY});
	var imgB = document.getElementById('imgSoccerBall');
	//Preventing browser's default ondragstart which interferes with this custom drag
	imgB.addEventListener('dragstart', function(event) { event.preventDefault(); });
	//Event when image is dragged, MouseDown event
	imgB.addEventListener('mousedown', function(){fDrag(this)});
});
window.addEventListener("load", function(event) {
	var txtI = document.getElementById("txtImage"); //Get reference for input element above image
	var imgS = document.getElementById("imgButterfly"); //Get reference for image
	//Register wheel event on the image
	imgS.addEventListener('wheel', function(event){MouseWheelHandler(event, this, txtI)});
	//Display image's current size
	txtI.value = "Display initial image height = " + imgS.naturalHeight + " : width = " + imgS.naturalWidth;
});
function MouseWheelHandler(e, image, txt) {
var rolled = e.deltaY;	//The wheel movement		
   if(rolled > 0){ //If positive wheel movement, increase image size
		if(image && image.style) { //only if image and style property exist
			image.height = image.height * 1.1;
			image.width = image.width * 1.1;
		}
   }
   else{ //If wheel movement is negative, decrease the image size
		if(image && image.style) { //only if image and style property exist
		   image.height = image.height * 0.9;
		   image.width = image.width * 0.9;
		}
   }  //Display current image height and width
   txt.value = "Current Image height = " + image.height + ": width = " + image.width;
}
//Named reference for function to store coordinates
//Needed for adding and removing document MouseMove event
var eventListener =  function(event){
	self.style.left = event.pageX-25+'px';
    self.style.top  = event.pageY-25+'px';
};
function fDrag(element){
	//Function is triggered by MouseDown event on image
	element.style.position = 'absolute';
	//Storing image reference in global variable
	self = element;
	//Add MouseMove event on document for setting max left and top based on document
	document.addEventListener('mousemove',eventListener);
	//On image ButtonUp remove document event MouseMove so image does not move when button is released
	element.addEventListener('mouseup', function(){ document.removeEventListener('mousemove',eventListener)});
}



