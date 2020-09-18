let a = parseFloat(prompt("enter your weigth"));
let b = parseFloat(prompt("enter your heigth"));
let x = parseFloat(b/100)
let result = parseInt(a/(x*x));
alert("Your BMI is "+ result);
if(result<16){
   alert("Severely underweight");
}
else if((result<18.5)&&(result>=16)){
  alert('Underweight');
}
else if((result<25)&&(result>=18.5)){
  alert('Normal');
}
else if((result<30)&&(result>=25)){
  alert('Overweight');
}
else if(result>30){
  alert('Obese');
}