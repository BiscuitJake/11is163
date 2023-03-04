"use script"

let dc = document;

let u_btn = dc.querySelector('.guest_button');

let r_btn = dc.querySelector('.reg_button');

let e_btn = dc.querySelector('.enter_button');

let r_cb = dc.querySelector('#reg_checkbox');
let e_cb = dc.querySelector('#enter_checkbox')

let popup_form = dc.querySelector('.popup_form');

var e_lgn = dc.querySelector("#enter_login") 
var e_psw = dc.querySelector('#enter_password') 
var e_sub = dc.querySelector('.submit_enter');

var r_lgn = dc.querySelector("#reg_login")
var r_psw = dc.querySelector("#reg_password")
var r_sub = dc.querySelector(".submit_reg")



let user_json;

u_btn.addEventListener("click",guest_button);
e_sub.addEventListener("click",enter_button);
r_sub.addEventListener("click",reg_button);



function guest_button(){
    document.location.href = "/pages/store_pages.html"
}


function reg_button(){
  var rl = r_lgn.value;
  var rp = r_psw.value;
  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then((json) => save_json_reg(json,rl,rp))
 
console.log("true")
}

function save_json_reg(json,rl,rp){
  var all_users = json.users;
  var check_login = false;
  console.log("------")
  console.log(all_users)


  for (const user of all_users)
  {
    if(rl == user.username)
    {
      check_login = true
    }
  }
   if(check_login != true)
   {
    fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    username: `${rl}`,
    password: `${rp}`,
  })
  })
  .then(res => res.json())
  .then(console.log);
   alert("Пользователь зарегистрирован")
   }
   else{
    alert("Логин уже занят")
    check_login = false;
   }
}

function enter_button(){
  var el = e_lgn.value;
  var ep = e_psw.value;
  
  
  console.log(el);
  console.log(ep);
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: `${el}`,
      password: `${ep}`,
    })
  })
  .then(res => res.json())
  .then((json) => save_json_enter(json))
;
}

function save_json_enter(json){
  user_json = json;
  if (json.message == "Invalid credentials"){
    alert("НЕПРАВИЛЬНЫЕ ДАННЫЕ")
  }
  else
  {
  localStorage.setItem('token',user_json.token)
  localStorage.setItem('id',user_json.id)
  console.log(user_json.id)
  console.log(user_json.token)
  document.location.href = "/pages/store_pages.html"
  }
}

