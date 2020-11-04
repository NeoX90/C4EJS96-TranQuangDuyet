let click = document.getElementById("click");
let number = document.getElementById("number");
let x;
function RandomNumber() {
    let x = Math.floor((Math.random() * 10) + 1);
  }

function check(){
    RandomNumber();
    if(number == x){
        alert("chuc mung ban da dung");
    }
    else{
        alert("nhap lai")
    }
}
check();