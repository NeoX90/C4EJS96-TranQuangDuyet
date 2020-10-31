let arrayName = [];
let showNike = document.getElementById('nike');
let showAdidas = document.getElementById('adidas');
let showBalen = document.getElementById('balenciaga');
let showVete = document.getElementById('vetements');
let showMen = document.getElementById('proMen');
let showWoman = document.getElementById('proWomen');
let showApparel = document.getElementById('apparel');
let showShoes = document.getElementById('shoes');
let showAccessories = document.getElementById('accessories');
let showList= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
// responsive menu
let menuBtn = document.querySelector(".menu-icon #menu-icon-bars")
let searchBtn = document.querySelector("#search-icon");
let cancelBtn = document.querySelector(".cancel-icon");
let items = document.querySelector(".menu-items")
let form = document.querySelector("#form-search")
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  // cancelBtn.classList.remove("show");
  form.classList.remove("active1");
  // cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active1");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// }
//chuyển đọng trái phải silder show + auto run
var slideIndex = 0;
showDivs(slideIndex); 

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for(i = 0 ; i< x.length;i++ ){
    x[i].style.display = 'none';
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs,2000);
}


//show sp ra html
function soProduct(img, name, price)
{
    showList.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class ="productsImg" style = "position: relative">
        <div class="productImg0" style = "top:0; "><img src="${img[0]}" alt="" ></div>
        <div class="productImg1" style = "position: absolute ; top: 0 ; z-index :-1"><img src="${img[1]}" alt="" ></div>
      </div>
      <div class="productTit">
        <b style ="font-size:10px;">${name}</b>
      </div>
      <div class="productPrice">$${price}</div>
      <button  id="addPro">Add to cart</button>
     </div>
    `
    )
}

let ProductsList = document.getElementById('ProductsList')
function searchResult (name){console.log(name)
  ProductsList.insertAdjacentHTML('beforeEnd',
  `
      <option value="${name}" />              
  `
  )
}
function fillArr(){
  for( let i = 0 ; i <products.length;i++){
    arrayName.push(products[i].name.toLowerCase())
  }
  // console.log(arrayName)
  for(let i = 0 ; i < products.length; i++){
    searchResult(products[i].name)
  }
}
console.log(fillArr())
// show sản phẩm ra từ đầu
showList.innerHTML = '';
for(let i=0; i< products.length; i++)
{
  // , products[i].description
    soProduct(products[i].img, products[i].name,products[i].price);
    // console.log(products[i].price)
}

// tìm kiếm theo brand + gender
// nike
showNike.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'Nike'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// adidas
showAdidas.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'adidas'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// balenciaga
showBalen.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'balenciaga'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// vetements
showVete.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){

    if(products[i].brand == 'VETEMENTS'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// show products for men
showMen.addEventListener('click',()=>{
  showList.innerHTML = '';
  // alert(products[1].gender)
  for(let i = 0 ; i < products.length ; i++){
    for(let j = 0 ; j <products[i].gender.length ; j++){
      if(products[i].gender[j] == 'male'){

        soProduct(products[i].img, products[i].name, products[i].price);
        
      }
    }
  }
})
// show products for women
showWoman.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    for(let j = 0 ; j <products[i].gender.length ; j++){
      if(products[i].gender[j] == 'female'){

        soProduct(products[i].img, products[i].name, products[i].price);
        
      }
    }
  }
})

showApparel.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'apparel'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
showShoes.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'shoes'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
showAccessories.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].category == 'accessories'){

      soProduct(products[i].img, products[i].name, products[i].price);
      
    }
  }
})
// tìm kiếm theo tên

function getInputValue(){
  showList.innerHTML ='';
  var inputVal = search_Text.value.toLowerCase();
  for(let i = 0 ; i < products.length ;i++){
    let x = products[i].name.toLowerCase()
      if(x == inputVal){
        soProduct(products[i].img, products[i].name, products[i].price);
        searchResult(products[i].name);
        
    }
  }
}

// sắp xếp theo giá 
const sortPro = document.getElementById("sortbyprice");
sortPro.addEventListener('change', (e) => {
  let sortType = sortPro.value;
  if (sortType == "hight_to_low") {
    
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      console.log(keyA)
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
      
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img, products[i].name, products[i].price )
      }
    
  }
  else {
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img, products[i].name, products[i].price )
      }

  }
});

// function checkPrice(){
//   let keyA = a.price;
//   let keyB = b.price;
//   alert('hello')
//   products.sort(function(a,b){
//     if (keyA < keyB) return -1;
//       if (keyA > keyB) return 1;
//       return 0;
//   });
//   for(let i=0;i<products.length; i++){
//     soProduct(products[i].img, products[i].name, products[i].price )
//   }
// }

