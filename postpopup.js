chrome.storage.sync.get(['value'], function(item) {
	console.log(item.value);
	var testVar = "Hello, " + item.value; 
	if (typeof item.value === "undefined") {
	document.getElementById("title").innerHTML = "Hello, <u>Blank</u>";	
	} else {
	document.getElementById("title").innerHTML = testVar;
	}
}); 