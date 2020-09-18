console.log("a");
for(let x = 0 ; x < 7 ; x++){
    console.log(x);
}

console.log("b");
let a = prompt("enter a number");
for(let i = 0 ; i < a; i++){
    console.log(i);
}

console.log("c");
let b = prompt("enter end number");
for(let a=3 ;a < b; a++){
    console.log(a);
}

console.log('d');
let a = prompt("enter start number");
let b = prompt("enter end number");
for(a ; a < b; a++){
    console.log(a);
}

console.log('e')
let a = parseInt(prompt("enter start number"));
let b = parseInt(prompt("enter end number"));
var n=3;
for(a ; a < b ; a+=n){
    console.log(a);
}

console.log('f')
let a = parseInt(prompt("enter start number"));
let b = parseInt(prompt("enter end number"));
let n = parseInt(prompt("enter step number"));
for(a ; a < b ; a+=n){
    console.log(a);
}