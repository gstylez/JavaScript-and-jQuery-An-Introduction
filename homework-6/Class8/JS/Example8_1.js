//Get button reference, only works when HTML page is fully parsed
var btn = document.getElementById("btnClick");
//Register event listener using the button reference
btn.addEventListener('click', function(){return alert('This is JavaScript');});