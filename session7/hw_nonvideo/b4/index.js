
function myFunction() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
    for(let d of x){
        console.log(d);
    }
}
