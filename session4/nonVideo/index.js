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
const listMenu ={
    debug :'The process of figuring out why your program has a certain error and how to fix it',
    done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect : 'The formal word for ‘error’',
    pm : 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux :'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
  }
//   const {debug,done,defect,pm,uiux} = listMenu;
  alert('hi there this is dev dictionary')
  let a = prompt('enter a key-word');
  for( let prop in listMenu){
    if(a === prop){
      console.log(listMenu[prop])
    }
  }
  let a = prompt('hadk')
  