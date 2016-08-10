$( function() {   //Document is ready for manipulation
	$("#btnClick").click(function(){
		//toggle function, alternates between display and hide
		$("p").toggle(2000, "swing", function(){
			if ($("p").css('display') == 'none'){  //Testing CSS display status
				//Paragraphs are hidden, change button text to Show
				$("#btnClick").attr('value','Show Paragraphs');  
			}
			else{
				//Paragraphs are displayed, change button text to Hide Paragraphs
				$("#btnClick").attr('value','Hide Paragraphs');
			}	
		});
	})	
});