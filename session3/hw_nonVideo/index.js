// hw1
// let a =5;
// let b =6;
// console.log(a,b);

// c1

// [a,b]=[b,a];
// console.log(a,b);

// c2

// let temp = a;
// a = b;
// b = temp ;
// console.log(a,b);

// hw2

// const str = 'Hello beauty there';
// const a = Array( str.split(" "));
// console.log(a);

// hw3
// const a = [4, 5, 7, -8];
// console.log(...a);
// use ... to print out

// hw4

// let menuItems = ['Jeans','T-Shrit','Socks'];
// let n = menuItems.length;

// while(true){
//   var x= prompt("hi there, welcome to admin penal, what do you want( C , R , U , D )");
//   if( x == ''|| x === null ){
//     break;
//   }
//   switch(x){
//       case "R":{
//           for(let i = 0; i < n ; i++){
//               console.log((i+1)+ '. '+menuItems[i]);
//           }
//           break;
//       }
//       case "C":{
//           let newItem = prompt('enter the name of new items')
//           menuItems.push(newItem);
//           console.log(menuItems)
//           break;
//       }
//       case "U":{
//         let nameTitle = prompt("enter name of newItems ");
//         let i = prompt('enter a id you want change');
//         menuItems[i] = nameTitle;
//         alert('done')
//         console.log(menuItems);
//         break;
//       }
//       case "D":{
//         let i = prompt('enter a id you want start delete');
//         let n = prompt('enter a count you want delete');
//         menuItems.splice(i,n);
//         console.log(menuItems);
//         break;
//       }
//   }
// }



// hw5

// let x = prompt('enter sequence of number,separaceted by command [,]');
// let arr = x.split(/[\s,]+/);
// let n = arr.length;
// let sum = 0;
// for(let i=0;i<n ; i++){
//   sum +=Number(arr[i]);
// }
// console.log("the sum of them is: "+sum);

// hw6

// let x = prompt('enter sequence of number,separaceted by command [,]');
// let arr = x.split(/[\s,]+/);
// let n = arr.length;
// let min;
// for(let i=0;i<n ; i++){
//   min = Math.min(Number(arr[i]));
// }
// console.log(min)

// hw7

// const arr = [3, 4, 6, -9, 10, -88, 2];
// let check = Number(prompt('enter a number you wwant check in my array'));
// let found = arr.find(Element => Element === check );
// let i = arr.findIndex(Element => Element === check );
// if(found){
//   alert(check +" is found in my array at "+i);
// }
// else{
//   alert(check +" is not found in my array");
// }

// hw8 thieu mấy tháng update sau

// let Flock = [20,70,35,65,19,104,97];
// console.log('hello my name is Duyet and here is my sheep size: \n\n'+Flock);
// // 8.2
// let n =Math.max(...Flock);
// console.log("Now my bigget sheep have size: "+ n +", let shave it");
// // 8.3
// let x = Flock.indexOf(n);
// if (x !== -1) {
//     Flock[x] = 8;
// }
// console.log('After shearing , here is my flock: \n\n' + Flock);
// // 8.4
// for(let i=0; i < Flock.length;i++){
//   Flock[i] +=50;
// }
// console.log("Month 1\n One month has passed, my sheep has grow, here are there size: \n\n" +Flock);
// let sum = 0;
// for(let i=0; i < Flock.length;i++){
//   sum +=Flock[i];
// }
// // 8.5
// for(let j =2; j < 5;j++){
//   console.log("Month "+j+ " \n One month has passed, my sheep has grow, here are there size: \n\n" );
//   for(let i=0; i< Flock.length; i++){
//     sum =Flock[i]+50*j;
//     console.log(sum)
//   }
// }
// // 8.6
// console.log("my Flock size total is: "+sum)
// let k = prompt("How much for 1 kg Sheep meat")
// console.log("i would get:"+sum+" x "+k+" = "+(sum*k))

// hw9

// hw10
// let x =prompt("enter name in here");
// let arr = x.split(/[\s,]+/);
// const map1 = arr.map(x => "<"+x+">");
// alert(x+"=>"+map1)

// hw11
// let x =prompt("enter name in here");
// let arr = x.split(/[\s,]+/);
// const result = arr.filter(x => x%2===1);
// alert(x+"=>"+result)

