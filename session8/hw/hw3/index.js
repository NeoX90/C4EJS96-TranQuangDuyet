// loadData();
// async function loadData(){
//     let data = await drive('1fvz34wY6phWDJsuIneqvOoZRPfo6CfJyPg1BYgHt59k');
//     console.log(data);
// }

axios.get('https://sheetdb.io/api/v1/igrdzv5852wgg')
.then( response => {
    console.log(response.data);
});
