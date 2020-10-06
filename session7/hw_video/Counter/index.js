let btnP = document.getElementById('btn_P');
let btnS = document.getElementById('btn_S');
let count = document.getElementById('count');
let a =0;
btnP.onclick = btnPOnclick;

function btnPOnclick(e){
    e.preventDefault();
    a++;
    count.innerHTML =a;
};
btnS.onclick = btnSOnclick;

function btnSOnclick(e){
    e.preventDefault();
    a--;
    count.innerHTML =a;
}
