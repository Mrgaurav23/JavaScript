function SetTimeOut(){
    setTimeout((function(){
        console.log("Ravindra");
    }),5000)

    const sayGaurav = function() {
        console.log("Gaurav");
    }
    setTimeout(sayGaurav,2000);

    const changeText = function() {
        document.querySelector("h1").innerHTML = "JavaScript Learning";
    }
    const changeMe = setTimeout(changeText,2000);
    document.querySelector("#stop").addEventListener("click",function(){
        clearTimeout(changeMe);
        console.log("Stopped");
    })
}

SetTimeOut();