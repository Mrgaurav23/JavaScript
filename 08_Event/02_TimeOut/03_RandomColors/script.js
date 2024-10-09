const randomColors = function(){
    const HEX = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += HEX[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalColors;
let startChanging = function () {
    if (!intervalColors) {
        intervalColors = setInterval(function(){
        document.body.style.backgroundColor = randomColors();
       },1000);   
    }
}

let stopChanging = function(){
    clearInterval(intervalColors);
    intervalColors = null;
}

document.querySelector("#start").addEventListener("click",startChanging);

document.querySelector("#stop").addEventListener("click",stopChanging)