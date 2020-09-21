// ex: init

let menuFilm = ['3 Chu Heo con','đố anh bắt được em','diệp vấn','ròm'];
console.log(menuFilm);

// ex: create

// let newItem = prompt('enter your favorite film')
// menuFilm.push(newItem);
// console.log(menuFilm)

// ex: read

// let i = prompt('enter a number between 0 to n');
// console.log(menuFilm[i])

// ex:update 1

// let menuTitle = prompt("enter your film");
// menuFilm[0] = menuTitle;
// console.log(menuFilm);

//  update 2

// let menuTitle = prompt("enter your film");
// let i = prompt('enter a id you want change');
// menuFilm[i] = menuTitle;
// console.log(menuFilm);

// delete 1

// let i = prompt('enter a id you want delete');
// menuFilm.splice(i,1);
// console.log(menuFilm);

// delete 2

// let i = prompt('enter a id you want delete');
// let n = prompt('enter a number you want delete');
// menuFilm.splice(i,n);
// console.log(menuFilm);

// readAll 1

// for(let i=0; i <menuFilm.length;i++){
//     console.log(menuFilm[i]);
// }

// readAll 2

// let n= Math.ceil(menuFilm.length/2)
// for(let i=0; i <n;i++){
//     console.log(menuFilm[i]);
// }

// readAll 3

// for(let i=0; i <menuFilm.length;i++){
//         console.log((i+1) +'. '+menuFilm[i]);
//     }

// update
// for(let i=0; i <menuFilm.length;i++){
//             menuFilm[i] = menuFilm[i].toLowerCase();
//     }
// console.log(menuFilm);

// while username ex

// let n;
// while(true){
//     n = prompt("register an username");
//     x = n.length;
//     if(x>15){
//         alert("your answer is too long")
//     }
//     else{
//         alert('Good username');
//         break;
//     }
// }

// while choice legs of spider

// let n 
// while(true){
//     n = Number(prompt("enter your answer "));
//     if(n){
//         switch(n){
//             case 1:
//             case 3:
//             case 4:{
//                 alert("Good luck next time");
//                 break;
//             }
//             case 2:{
//                 alert('Bravo, you are correct');
//                 break;
//             }
//             default:{
//                 alert('Invalide choice, the answer must be 1, 2, 3 or 4')
//                 n = Number(prompt("enter your answer "));
//                 break;
//             }
//         }
//         break;
//     }
// }