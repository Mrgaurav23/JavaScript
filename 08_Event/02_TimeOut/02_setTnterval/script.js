function SetInterval(){
    const changeInterval = setInterval(function(){
        console.log("Ravindra");
    },2000);

    clearInterval(changeInterval);

    const sayDate = function(str){
        console.log(str,Date.now());
    }

    let intervalChange = 
    document.querySelector("#start").addEventListener("click",() =>{
        intervalChange = setInterval(sayDate,2000,"Hey");
    });

    document.querySelector("#stop").addEventListener("click", () => {
        clearInterval(intervalChange);
    })
    
}
SetInterval();