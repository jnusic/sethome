window.onLoad = startTime(); 

function startTime() {
    var today = new Date();
    console.log(today);
    var h = today.getHours();
    console.log(h);
    var m = today.getMinutes();
    console.log(m); 
    var s = today.getSeconds();
    console.log(s);
    m = checkTime(m);
    console.log(m);
    s = checkTime(s);
    console.log(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500); 
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; //add zero in front of numbers < 10
    return i;
}
