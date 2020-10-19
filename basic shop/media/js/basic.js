
let mainPro= document.getElementById("showList");
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
mainPro.innerHTML = '';
for(let i=0; i< products.length; i++)
{
    soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
}