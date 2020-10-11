async function loadContent(){
    const cont = await fetch(`http://quotes.rest/qod.json`);
    const data = await cont.json();
    // console.log(data.contents.quotes[0].quote)  
    let c = document.getElementById('content');
    let a = document.getElementById('author');
    // (data.contents.quotes[0].quote).innerHTML 
    c.innerHTML = data.contents.quotes[0].quote;
    a.innerHTML = data.contents.quotes[0].author;
} 
loadContent();
