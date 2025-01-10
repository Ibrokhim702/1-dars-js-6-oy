// const newTag = +prompt("Son kiriting");

// function bot (a){
//     if(a == "" ){
//         alert("Iltimos son kiriting")
//     }else if(a  % 2 == 0){
//         alert("Juft son" )
//     }
//     else if ( a % 3){
//         alert( "toq son")
//     }
// }
// bot(newTag)

// .section__title elementini tanlash
const section__title = document.querySelector(".section__title");
const section__text = document.querySelector(".section__text");
const header__link = document.querySelector(".header__link")
const header__link1 = document.querySelector(".header__link1");
const header__link2 = document.querySelector(".header__link2")
const btn = document.querySelector(".section__btn")
const img = document.querySelector(".img")
const img1 = document.querySelector(".img1")

function header__btn1() {
    document.body.style.backgroundColor = "black";
    section__title.style.color = "white";
    section__text.style.color = "white";
    header__link.style.color = "white";
    btn.style.color = "white";
    header__link1.style.color = "white"
    header__link2.style.color = "white"
    img1.style.display = "block"
}


function header__btn() {
    document.body.style.backgroundColor = "rgb(196, 181, 165)";
    btn.style.color = "black"
    header__link.style.color = "black";
    header__link1.style.color = "black";
    header__link2.style.color = "black";
    section__title.style.color = "black";
    section__text.style.color = "black";
    img.style.display = "block"
    img1.style.display = "none"
}