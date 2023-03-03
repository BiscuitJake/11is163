"use script"
var id_info = document.getElementsByTagName("p")['id'].textContent;
console.log(id_info);

fetch(`https://dummyjson.com/products/${id_info}`)
.then(res => res.json())
.then((json) => showProduct(json));

function showProduct(json){
    // console.log(json);
    let product = json;
    let content = document.querySelector("#content");
    content.innerHTML += `
    <div class = "item_div">
    <p><a href = "/pages/smartphones/${product.id}.html"> <img src=${product["images"][0]} class="item_img"></a></p>
    <div class = "item_div2">
    <p class="item_name">${product.title}</p>
    <p class="item_description">${product.description}</p>
    <p class="item_price">Price -${product.price}</p>
    <p class="item_rating">Rating - ${product.rating}</p>
    </div>
    <button class="button_cart">В корзину</button>
    </div>
    `;
}

function item_page(){

}