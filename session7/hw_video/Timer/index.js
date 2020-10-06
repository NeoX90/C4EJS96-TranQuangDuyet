function clock() {
    var stopCount = document.getElementById("stopCount");
    
    var myTimer = setInterval(myClock, 1000);
    var c = parseInt(document.getElementById('demo').value);
    function myClock() {
      document.getElementById("showMess").innerHTML = --c;
      if (c == 0) {
        clearInterval(myTimer);
        alert("Reached zero");
      }
    }

}