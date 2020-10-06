var x = document.getElementsByTagName("LI");
var arr =[];
arr =document.getElementsById("uke").getElementsByTagName("li");
console.log(arr)
function printAll(){
    for(let i = 0 ; i< x.length;i++){
        arr.push(x[i]);
    }
    document.getElementById("demo").innerHTML = arr.innerHTML;
}
function myFunction() {
    document.getElementById("demo").innerHTML = x[1].innerHTML;
}
