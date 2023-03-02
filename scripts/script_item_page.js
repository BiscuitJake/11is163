"use script"
let id_info = 1

fetch(`https://dummyjson.com/products/1`)
.then(res => res.json())
.then((json) => showProduct(json));

function showProduct(json){
    // console.log(json);
    let arr_Product = json;
    let content = document.querySelector("#content");
        content.innerHTML += `
        <div class = "item_div">
        <p class="item_name">${title}</p>
        </div>
        `;
}