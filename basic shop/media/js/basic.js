let showNike = document.getElementById('nike');
let mainPro= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
function soProduct(img, name, description, price)
{
    mainPro.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class="productImg"><img src="${img}" alt="" style = "display :flex"></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${description}</span>
      </div>
      <div class="productPrice">${price}</div>
      <button class="addPro">Add to cart</button>
     </div>
    `
    )
}
// mainPro.innerHTML = '';
// for(let i=0; i< products.length; i++)
// {
    // soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
// }

// console.log(products.length)
// function searchNike(){
//   for(let i = 0 ; i < products.length ; i++){
//     if(products[i].brand == 'Nike'){
//       soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
//     }
//   }
// }

// tìm kiếm theo brand
showNike.addEventListener('click',()=>{
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'Nike'){
      soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
    }
  }
})

// tìm kiếm theo tên
search_btn.addEventListener('click',()=>{

})

function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = search_Text.value;
  for(let i = 0 ; i < products.length ;i++){
    let x = products[i].name.split(' ')
    for(let j = 0 ; j < x.length ; j++){
      if(x[j] == inputVal){
        soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
      }
    }
  }
  // Displaying the value
  // alert(inputVal);
}
