const buttonElement = document.querySelectorAll(".button");
const mainElement = document.querySelector(".main");

buttonElement.forEach( (button) => {
    console.log(button);
    button.addEventListener("click", (elem)=> {
        console.log(elem.target.id);
        if (elem.target.id === "grey") {
            mainElement.style.backgroundColor = elem.target.id;
        }
        if (elem.target.id === "white") {
            mainElement.style.backgroundColor = elem.target.id;
        }
        if (elem.target.id === "yellow") {
            mainElement.style.backgroundColor = elem.target.id;
        }
        if (elem.target.id === "blue") {
            mainElement.style.backgroundColor = elem.target.id;
        }
    })
})