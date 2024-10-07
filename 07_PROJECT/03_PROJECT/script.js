const clockElement = document.querySelector("#clock");

setInterval( function () {
    const date = new Date();
    clockElement.innerHTML = date.toLocaleTimeString();
},1000);