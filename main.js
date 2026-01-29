'use strict'

let buttonSet = document.getElementById('set_button');
let checker = 0;

let opt_wind = document.querySelector(".set_window");

buttonSet.addEventListener('click', function(e){
    if(checker == 0){
    buttonSet.style.transform = 'rotate(90deg)';
    buttonSet.style.bottom = '4px';
    buttonSet.style.left = '6px';
    buttonSet.style.transition = '1s'
    checker = 1;
    opt_wind.style.display = "block";
    }
    else if(checker != 0){
        buttonSet.style.transform = 'rotate(-0deg)';
        buttonSet.style.bottom = '16px';
        buttonSet.style.left = '0px';
        checker = 0;
        opt_wind.style.display = "none"; 
}
})

let infoButton = document.querySelectorAll('.more_info')
let photoArticle = document.querySelectorAll('.photo')

let closeButton = document.querySelectorAll('.close_button')

for(let i=0;i<infoButton.length;i++){
    infoButton[i].addEventListener('click', function(e){
        photoArticle[i].style.display = "block";
    })
    closeButton[i].addEventListener('click',function(e){
        photoArticle[i].style.display = "none";
    })
}

let catButton = document.querySelectorAll('.category_button')
for(let i=0;i<catButton.length;i++){
    catButton[i].addEventListener('click', function(e){
        catButton[i].style.transition = "125ms";
        catButton[i].style.borderWidth = "8px";
        catButton[i].style.borderRadius = "32px";
        setTimeout(function(){
            catButton[i].style.transition = "2s";
            catButton[i].style.borderWidth = "4px";
            catButton[i].style.borderRadius = "16px";
        }, 125);
    })
}

let body = document.body;
let submitButton = document.querySelector('.submit')

let form = document.querySelector('#options')
form.addEventListener("submit", function(e){

    let data = new FormData(form);

    let theme = data.get("Theme")
    let lang = data.get("Lang")

    localStorage.setItem("theme", theme)
    localStorage.setItem("lang", lang)
})
if(localStorage.getItem("theme") === "dark"){
    body.style.backgroundColor = "#00122E";
    body.style.color = "#457CD6";
    let h1 = document.querySelectorAll('h1')
    for(let i = 0;i<h1.length;i++){
        h1[i].style.color = "#457CD6";
    }
    let p = document.querySelectorAll('p')
    for(let i = 0;i<p.length;i++){
        p[i].style.color = "#457CD6";
    }
    let header = document.querySelector('.main_header')
    header.style.color = "#457CD6"
    let head = document.querySelector('.head')
    head.style.backgroundColor = "#00225A"
    let img = document.querySelector("img").src = '449d40dfe417974d48f0519bc7e088f2.jpg';
    let h2 = document.querySelectorAll('h2')
    for(let i = 0;i<h2.length;i++){
        h2[i].style.color = "#457CD6";
    }
    let h3 = document.querySelectorAll('h3')
    for(let i = 0;i<h3.length;i++){
        h3[i].style.color = "#457CD6";
    }
    buttonSet.style.backgroundColor = "#00225A"
    buttonSet.style.borderColor = "#00225A"
    let prog_article = document.querySelector(".prog_lang_article")
    prog_article.style.backgroundColor = "#00173B"
    let article = document.querySelectorAll(".article")
    for(let i=0;i<article.length;i++){
        article[i].style.backgroundColor = "#001D4A"
    }
    let und_article = document.querySelectorAll(".und-article")
    for (let index = 0; index < und_article.length; index++) {
        und_article[index].style.backgroundColor = "#00255E"
    }
    for (let index = 0; index < catButton.length; index++) {
        catButton[index].style.backgroundColor = "#457CD6"
        catButton[index].style.borderColor = "#00225A"
    }
    let category_list = document.querySelector(".category_list")
    category_list.style.backgroundColor = "#001D4A"
    let in_list = document.querySelector(".in_list")
    in_list.style.backgroundColor = "#00173B"
    for(let i=0;i<photoArticle.length;i++){
        photoArticle[i].style.backgroundColor = "#00225A"
        photoArticle[i].style.borderColor = "#457CD6"
        closeButton[i].style.backgroundColor = "#00225A"
        closeButton[i].style.borderColor = "#00225A"
        closeButton[i].style.color =  "#457CD6"
    }
    let portrait = document.querySelector(".Ada-portrait")
    portrait.style.borderColor = "#457CD6"
    let machine = document.querySelector(".an_mach")
    machine.style.borderColor = "#457CD6"
    let eniac = document.querySelector(".eniac")
    eniac.style.borderColor = "#457CD6"
    opt_wind.style.backgroundColor = "#00225A";
    opt_wind.style.borderColor = "#003891";
        submitButton.style.backgroundColor = "#457CD6";
        submitButton.style.borderColor = "#003891";
        submitButton.style.color ="#00225A";
        let footer = document.querySelector("footer")
        footer.style.backgroundColor = "black"
        let footer_h1 = document.querySelector('.footer_h1')
        footer_h1.style.color = "#457CD6"
        let footer_h3 = document.querySelector('.footer_h3')
        footer_h3.style.color = "#457CD6"
        let footer_a = document.querySelector('.footer_a')
        footer_a.style.color = "#457CD6"
        let settings = document.querySelector(".settings")
        settings.style.left = "767px"
}
if(localStorage.getItem("lang") === "eng"){

}
if(localStorage.getItem("lang") === "fr"){

}
if(localStorage.getItem("lang") === "deu"){

}
if(localStorage.getItem("lang") === "sp"){

}
if(localStorage.getItem("lang") === "morz"){

}