console.log("a");
let b = parseInt(6/2);
let countL =0;
let countH =0;
for(let i=0; i <=6 ;i++){
  if(i<b){
    countL++;
  }
  else if(i>b){
    countH++;
  }
}
console.log(countH+"H");
console.log(countL+"L");

console.log("b");
let a = parseInt(prompt("enter a number"));
let b = parseInt(a/2);
let countL =0;
let countH =0;
for(let i=0; i <=a ;i++){
  if(i<b){
    countL++;
  }
  else if(i>b){
    countH++;
  }
}
console.log(countH+"H");
console.log(countL+"L");

console.log("c")

for(let i = 0 ; i < 8 ; i++ ){
    if(i % 2 === 0 ){
        console.log('0')
    }else{
        console.log('1')
    }
}

 console.log("d")
 let n = prompt('Enter the total number of 1 and 0 ?  ')
 for(let i = 0 ; i < 8 ; i++ ){
    if(i % 2 === 0 ){
        console.log('0')
    }else{
        console.log('1')
    }
}

