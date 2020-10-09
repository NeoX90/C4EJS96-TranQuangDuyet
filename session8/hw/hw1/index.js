function testPromise(){ 
    let promise = new Promise ((resolve,reject) => {
        
        // reject('hmm have a mistake');
        setTimeout(() => {
            resolve('Promise is da best')
        },5000)
    });
    return promise;
    
}
// promise.then((showMes)=>{
//     console.log(showMes)
// })
// promise.catch((showMes2) =>{
//     console.log(showMes2)
// });
async function asyncCall() {
    let result = await testPromise();
    console.log(result)
}
asyncCall();