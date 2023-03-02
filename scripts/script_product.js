"use script"

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => showProduct(json));

function showProduct(json){
    // console.log(json);
    let arr_Product = json.products;
    let content = document.querySelector("#content");
    for (const product of arr_Product){
        if(product.category == "smartphones")
        {
        console.log("----->" + product.title);
        content.innerHTML += `
        <p style="display:none;">${product.id}</p>
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
    }
}

