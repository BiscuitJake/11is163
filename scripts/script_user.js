"use script"
let rates = [
    {
        "Name" : "Игорь",
        "Comment" : "Хороший сайт, добрый и позитивный.",
        "Rating" : "5"
    },
    {
        "Name" : "Егор",
        "Comment" : "Нормальный сайт, я бы таким пользовался. А главное, это БОООООООООЛЬШОЙ отзыв.",
        "Rating" : "4"
    },
    {
        "Name" : "Роман",
        "Comment" : "Поставьте 5",
        "Rating" : "5"
    }
];

var doc = document;
var int = 1;
var user_name = localStorage.getItem('name')
localStorage.clear();
let rt = doc.querySelector("#rt")
let com = doc.querySelector("#com")
let rb = doc.querySelector(".rb")
let lg = doc.querySelector(".logout_button")
let help = doc.querySelector(".help")

rb.addEventListener("click",rating)



function rating() {
    com_v = com.value;
    rt_v = rt.value;
    help.setAttribute('style', 'display: none');
    console.log(rt_v);


    if (com_v != null || rt_v != "")
    {
    rates.push({
        "Name" : `${user_name}`,
        "Comment" : `${com_v}`,
        "Rating" : `${rt_v}`
    })
    }
    for (const rate of rates){
       let div = doc.createElement('div');
       let rau = doc.getElementById("rau");
       div.innerHTML = `<div class="rate_${int++}" id="rateDiv"> <p id="rate_class">Имя: ${rate.Name}</p> </br> <p id="rate_class">Комментарий: ${rate.Comment}</p> </br> <p id="rate_class">Оценка: ${rate.Rating}</p> </div>`;
       rau.parentNode.appendChild(div);
    }
}

lg.addEventListener("click",logout)

function logout(){
    document.location.href = "/index.html"
}
