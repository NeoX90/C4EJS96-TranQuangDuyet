// hw1
let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
var count = {};
arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);

// cach 2
let wordArr = [];
for(let i = 0; i <arr.length;i++){
    
}
// hw2
let listbrand = {};
for (let items of inventory) {
    let brand = items.brand;
    if (brand in listbrand) {
        listbrand[brand].push(items);
    }else{
        listbrand[brand] = [];
        listbrand[brand].push(items);
    }
}
console.log(listbrand);

// hw3 + 4 5,6,7
let a = prompt('enter your brand :');
let b = '';
for (let i = 0; i < listbrand[a].length; i++) {
    b += '\n' + listbrand[a][i].name;
}
let sum = 0;
for (let n of listbrand[a]) {
    sum += n.price*n.quantity*1000;
}
alert('there are'+listbrand[a].length+'genneration of '+a.toLocaleUpperCase() +' in inventory: \n'+b +'\n'+sum)

