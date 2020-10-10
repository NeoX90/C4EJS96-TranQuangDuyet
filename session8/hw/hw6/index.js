function tinh(x1,x2,y1,y2){
    let x = Math.sqrt(Math.pow((x1 - x2) , 2) + Math.pow((y1 - y2), 2));
    console.log(x);
}
const x = tinh(3, 10, 0, 6);
if (x !== 5) {
console.log(`Failed: the calculation is wrong`);
} else {
console.log(`Passed, bravo`)};