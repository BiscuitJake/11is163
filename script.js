"use script"

let users = [
    {
        "pl" : "admin",
        "lg" : "admin",
        "pw" : "admin1234",
        "name" : "Gutov"
    },
    {
        "pl" : "user",
        "lg" : "jumbo",
        "pw" : "123123",
        "name" : "Obama"
    },
    {
        "pl" : "user",
        "lg" : "1",
        "pw" : "1",
        "name" : "1"
    }
];

var bob = false;
let flogin = document.querySelector(".form-login")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let fbtl = document.querySelector("#btl")
let fnm = document.querySelector("#nm")
let fmes = document.querySelector("#mes")
let fbtr = document.querySelector("#btr")
let nameReg = document.querySelector(".nameReg")
let formlogin = document.querySelector(".form-login")
let main = document.querySelector(".main-page")
let admin = document.querySelector(".admin-page")




fbtr.addEventListener("click",registr);

function registr(){

    if(nameReg.getAttribute("style") == 'display: none;')
    {
        nameReg.setAttribute('style', 'display: block;');
        fnm.setAttribute('type','text');
        console.log("++");
        bob = true;
        console.log(bob)
   
    }
    else
    {
        nameReg.setAttribute('style', 'display: none;');
        fnm.setAttribute('type','hidden');
        console.log("--");
        bob = false;
    }
    
}

fbtl.addEventListener("click", avtoriz);

function role(role){
    if(role == "user")
    {
        main.setAttribute('style', 'display: block;');
    }
    else if (role == "admin")
    {
        admin.setAttribute('style', 'display: block;');
    }
}

function avtoriz() {
    let lg = flg.value;
    let pw = fpw.value;
    nameReg.setAttribute('style', 'display: none;');
    fnm.setAttribute('type','hidden');

    if(bob == false)
    {
    for (const user of users){

        console.log("Start")
        console.log(user.name)
        console.log(user.lg)
        console.log(user.pw)
        console.log("Fin")

        if(user.lg == lg && user.pw == pw)
        {
            fmes.innerHTML = "YES"
            formlogin.setAttribute('style', 'display: none;');
            role(user.pl)
            break;
        }
        else
        {
            fmes.innerHTML = "Unknown User"
        }
        }
    }
    else
    {
        for (const user of users){
            if(user.lg != flg.value)
            {
            users.push({
                "pl":'user',
                "lg" : `${flg.value}`,
                "pw" : `${fpw.value}`,
                "name" : `${fnm.value}`})
            bob = false;
            }
            else
            {
                fmes.innerHTML = "Wrong Login";
                bob = false;
            }
        }
    }
    
}