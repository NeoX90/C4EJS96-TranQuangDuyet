console.log("b1");
console.log("a");
console.log("ex:");
console.log("+ you can't use a number as ther first character");
console.log(
  "+ you can't use any other characters, including spaces (khoa?ng trang), symbols and punctuation marks(da'u ca^u)"
);
console.log(
  "+ you can't use one of JavaScript's reserved words (key words) as a variable name"
);

console.log("b)In JavaScript, how to check a variable data types?");

console.log("the answer:");
console.log("use : console.log(typeof x) (x is variable name)");
console.log("ex:");
let x = 12345;
console.log(typeof x);
console.log("=> result is number");

console.log("b2");
console.log("1:b");
console.log("2:c");
console.log("3:a");
console.log("4:e,d");

console.log("b3");
let message = "Coding is great";
console.log(message);

var studentCount = 0;
console.log(studentCount);

console.log("b4");
console.log("a + c)");
let message1 = "Coding might not be easy, but still great";
console.log(message1);
message1 = message1.toLowerCase();
console.log(message1);

console.log("b + d)");
var studentCount = 16;
console.log(studentCount);
studentCount += 1;
console.log(studentCount);

console.log("b5");
alert("you look beautiful today");

console.log("b6");
var mess = prompt("hi, your name plaese?");
alert(mess);

console.log("b7");
var fristName = prompt("enter your first name");
var lastName = prompt("enter your last name");
alert("hi " + lastName + " " + fristName);

console.log("b8");
var c = prompt("enter sile lenght of square");
alert("the square area is " + c * c);

console.log("b9");
var b = prompt("enter radius of circle");
alert("the circle are is " + parseFloat(Math.pow(b, 2) * 3.14));

console.log("b10");
var a = prompt("enter the temperature in Celsius");
alert(a + "(C) = " + parseFloat(a * 1.8 + 32) + "(F)");
