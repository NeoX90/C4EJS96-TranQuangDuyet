// bai1
//  const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
    
//     // for (let x in product) {
//     //   for(let y  product){
//     //       console.log(x+ y);
//     //   }
//     // }
    
//     console.log('x is property')
//     for(let prop in product){
//       console.log(prop+': '+product[prop])
//     }

// bai2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };
// ({subject,assignTo,dueDate}= task);
// console.log(subject,assignTo,dueDate);

// bai3
// console.log('type data of outermost layer is object');
// console.log('type data hits is array');
// console.log('In each hit of hits, how to find the job’s title, locations, salary, benefits,skills and requirements')
// const {title, locations, salary, benefits,skills, requirements} = benefits;
// console.log(title, locations, salary, benefits,skills , requirements)

//  bai4
// const listMenu ={
//     debug :'The process of figuring out why your program has a certain error and how to fix it',
//     done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect : 'The formal word for ‘error’',
//     pm : 'The short version of Project Manager, the person in charge of the final result of a project',
//     uiux :'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
//   }
//   // const {debug,done,defect,pm,uiux} = listMenu;
//   alert('hi there this is dev dictionary')
//   let a
//   // while(true){
//     a = prompt('enter a key-word');
//     // if( a == ''|| a === null ){
//     //   break;
//     // }
//     // else{
//       if(listMenu.hasOwnProperty(a) === true){
//         console.log(listMenu[a])
//       }
//       else{
//         alert(a+ ' does not exist in our data,we will add new')
//         listMenu[a]=prompt('enter new data');
//         alert('done');
//       }
//   console.log(listMenu)
//     // }
//   // }

// // bai5
// let item1 ={
//     Name : "Xiaomi portable charger 20000mah",
//     Brand : 'Xiaomi',
//     Price : 428,
//     Color : 'White',
//     Category : 'Charger'
//   };
//   let item2 ={
//     Name : "VSmart Active 1",
//     Brand : 'VSmart',
//     Price : 5487,
//     Color : 'Black',
//     Category : 'Phone'
//   };
//   let item3 ={
//     Name : "IphoneX",
//     Brand : 'Apple',
//     Price : 21490,
//     Color : 'Gray',
//     Category : 'Phone'
//   };
//   let item4 ={
//     Name : "Samsung Galaxy A9",
//     Brand : 'Samsung',
//     Price : 8490,
//     Color : 'Blue',
//     Category : 'Phone'
//   };
//   let listItems = [item1,item2,item3,item4];
  
//   // 5.1
//   // for(let i=0; i<listItems.length;i++){
//   //   console.log('----------------------')
//   //   console.log('Name : '+listItems[i].Name);
//   //   console.log('Price : '+listItems[i].Price);
//   // }
  
//   // 5.2
//   // for(let i=0; i<listItems.length;i++){
//   //   console.log('----------------------')
//   //   console.log('#'+(i+1)+' Name : '+listItems[i].Name);
//   //   console.log('   Price : '+listItems[i].Price);
//   // }
//   // // console.log(listItems.indexOf(item1))
//   // let a = Number(prompt('enter a number you want to check position'));
//   // console.log(listItems[a-1]);
  
//   //5.3
//   // let x = prompt('enter your catory :');
//   // for(let i=0; i<listItems.length;i++){
//   //   if(listItems[i].Category === x){
//   //     console.log('----------------------')
//   //     console.log('Name : '+listItems[i].Name);
//   //     console.log('Price : '+listItems[i].Price);
//   //   }
//   // }
  
//   // 5.4
//   listItems[0].providers = ['phuPhukienzero','Dientuccc'];
//   listItems[1].providers = ['Tgdd','Ddghn','VhStore'];
//   listItems[2].providers = ['Tgdd'];
//   listItems[3].providers = ['Tgdd'];
//   // for(let i=0; i<listItems.length;i++){
//   //     console.log('----------------------')
//   //     console.log('Name : '+listItems[i].Name);
//   //     console.log('Price : '+listItems[i].Price);
//   //     console.log('Providers : '+listItems[i].providers);
//   // }
  
//   // 5.5
//   let x = prompt('enter your catory :');
//   for(let i=0; i<listItems.length;i++){
//     for(let j=0; j<listItems[i].providers.length;i++){
//       if(listItems[i].providers[j] === x){
//       console.log('----------------------')
//       console.log('Name : '+listItems[i].Name);
//       console.log('Brand : '+listItems[i].Brand);
//       console.log('Price : '+listItems[i].Price);
//       console.log('Color : '+listItems[i].Color);
//       console.log('Providers : '+listItems[i].providers);
//     }
//     }
//   }
// bai6

  