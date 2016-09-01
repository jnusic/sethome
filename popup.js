
document.getElementById('button').onclick = updateName;

chrome.storage.sync.get(['value'], function(item) {
	console.log(item.value);
});

  function updateName() {
  var theValue = document.getElementById('text').value;

   if(!theValue) {
    console.log("didn't work or nothing there");
  	}

  chrome.storage.sync.set({'value': theValue}, function(){
    console.log("The name is" + theValue); 
    document.getElementById('button').innerHTML = "Saved";
    document.getElementById('button').style.textDecoration = "underline";
  	});
  }