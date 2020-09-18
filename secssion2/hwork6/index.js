let a = parseInt(prompt("enter a number"));
if((0<=a)&&(a<=9)){
  let x =parseFloat(9/2);
  if(a>x){
    alert("higher half of 9");
  }
  else{
    alert("lower half of 9");
  }
}
else{
  alert("enter a number 0<x<9 , pls");
}