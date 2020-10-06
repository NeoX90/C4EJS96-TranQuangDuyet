
document.addEventListener("DOMContentLoaded",function(){
    const d = document.getElementById('msg');
    d.textContent = 'hello con lon hieu';
    d.addEventListener(`click`, (e)=>{
        d.textContent = 'hello con lon hieu';
    })
    d.insertAdjacentHTML(`beforeend`,`
        <div> Cool </div>
    `)
    console.log(d)
});

