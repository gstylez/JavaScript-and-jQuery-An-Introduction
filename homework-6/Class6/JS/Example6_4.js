// Function to recursively traverse all element nodes
function fTreeDOM(objElement, strObjType) {
		//Assign either children (only elements) or childNodes (all nodes)
		var arrChildren = strObjType.toLowerCase() == "element" ? objElement.children : objElement.childNodes;
		fTreeDOM.numLevel++; //increment level counter
        for(var i=0; i < arrChildren.length; i++) {
			//Assign node to property strOutput
			fTreeDOM.strOutput += Array(fTreeDOM.numLevel * 4).join('-') + arrChildren[i] + "\n";
			if (arrChildren[i].childElementCount > 0) fTreeDOM(arrChildren[i],strObjType); //call function recursively
        }
		fTreeDOM.numLevel--; //coming out of recursion, decrement level counter
};
//When DOM is ready
document.addEventListener('DOMContentLoaded', function(){
		var arrNodeType = ['Element','Node'];
		for (i=0;i<arrNodeType.length;i++){
			//Initialize function properties
			fTreeDOM.strOutput = 'Tree of ' + arrNodeType[i] + "s:\n"; 
			fTreeDOM.numLevel = -1;
			//Call Function
			fTreeDOM(document.body, arrNodeType[i]);
			alert(fTreeDOM.strOutput);		
		}
	}
);