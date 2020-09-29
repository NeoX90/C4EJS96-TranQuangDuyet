// basic part 1
// hw1
let x= Math.random() * 1
console.log(x)

// hw2
let arr = [1,4,6,8,10,7];
let x = arr[Math.floor(Math.random() * arr.length)]
console.log(x)

// hw3 + hw 4
alert('what is not popular in Viet Nam ? \n\n 1 : Coffe \n 2 : Pho \n 3 : Ao Dai \n 4 : Anime')
let arr = ['coffe','pho','ao dai','anime'];
let x = arr[Math.floor(Math.random() * arr.length)]
if(x === 'anime'){
  console.log('correct');
  alert('the answer is : Anime');
}
else{
  console.log('wrong')
}
// hw5 
alert('what is not popular in Viet Nam ? \n\n 1 : Coffe \n 2 : Pho \n 3 : Ao Dai \n 4 : Anime')
let arr = ['coffe','pho','ao dai','anime'];
// let x = arr[Math.floor(Math.random() * arr.length)]
let x;
while(true){
  x = Number(prompt('enter your answer:'))
  if(x === 'anime'){
    console.log('correct');
    alert('the answer is : Anime');
    break;
  }
  else{
    console.log('Good luck in next time')
    
  }
}

// hw6
alert('what is not popular in Viet Nam ? \n\n 1 : Coffe \n 2 : Pho \n 3 : Ao Dai \n 4 : Anime')
let arr = ['coffe','pho','ao dai','anime'];
// let x = arr[Math.floor(Math.random() * arr.length)]
let count =0;
let x;
while(true){
  x = Number(prompt('enter your answer:'))
  if(x === 4){
    console.log('correct');
    alert('the answer is : Anime');
    break;
  }
  else{
    count++
    alert('wrong')
    if(count === 3){
      alert('bạn đã bỏ qua đáp án chính xác rồi')
    }
  }

}

// hw7 +hw8
const myQuestion = [
  {
    question : ' what animal is a symbol of loyal ?',
    answer : {
      1 : 'dog',
      2 : 'cat',
      3 : 'chicken',
      4 : 'pig'
    },
    result : 1
  },
  {
    question : ' đất nước nào nằm ở châu Âu ?',
    answer : {
      1 : 'Úc',
      2 : 'Áo',
      3 : 'Canada',
      4 : 'Thổ nhĩ kì'
    },
    result : 2
  },
  {
    question : ' Ca sĩ nào là chủ nhân của ca khúc "Đưa nhau đi trốn" ?',
    answer : {
      1 : 'Sơn Tùng MTP',
      2 : 'Noo Phước Thịnh',
      3 : 'Lynk lee',
      4 : 'Đen Vâu'
    },
    result : 4
  },
];
let count =0;
let x = myQuestion.length;
for(let i = x-1;i >= 0; i--){ // chưa chỉnh được phần alert question
  x = myQuestion.length;
  let j = Math.floor(Math.random() * x);
  alert(myQuestion[j].question+'\n'+JSON.stringify(myQuestion[j].answer))
  let a = Number(prompt('enter a number answer : '));
  if(a === myQuestion[j].result){
    alert('bravo');
    count++
  }
  else{
    alert('your answer is wrong');
  }
  myQuestion.splice(j,1);
}
alert('số điểm bạn đạt được là: '+ count)
  
  
  