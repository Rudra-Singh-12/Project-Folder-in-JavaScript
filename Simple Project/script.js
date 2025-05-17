let h1=document.querySelector("h1");
let btn=document.querySelector('button');
let div=document.querySelector("div");

btn.addEventListener("click",function(){
    h1.innerText=randomColorGenerator();
    div.style.backgroundColor=randomColorGenerator();
})

function randomColorGenerator(){
    let red=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let color=`rgb(${red},${green},${blue})`
    return color;
}