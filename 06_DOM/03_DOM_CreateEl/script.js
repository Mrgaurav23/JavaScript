//Chidren Element Access From Parent.
function childAccess(){
    const parentElement = document.querySelector(".parent");
    console.log(parentElement);
    console.log(parentElement.children);
    console.log(parentElement.children[1]);
    
    for (let i = 0; i < parentElement.children.length; i++) {
        console.log(parentElement.children[i].innerHTML);   
    }
    parentElement.children[1].style.backgroundColor = "orange";
    
    console.log(parentElement.firstElementChild);
    console.log(parentElement.lastElementChild);

    //NodeList in javaScript
    console.log("NODE:",parentElement.childNodes);
}
// childAccess();



//Access parent and siblings from children.
function parentAccess(){
    const dayOneElement = document.querySelector(".day");
    console.log(dayOneElement);
    console.log(dayOneElement.parentElement);
    console.log(dayOneElement.nextElementSibling);

}
// parentAccess();


//Here We Create a nodeList
function createNodeList(){
    const divEl = document.createElement("div");
    console.log(divEl);
    divEl.className = "div-el";
    divEl.id = "divid-el"
    divEl.setAttribute("title","generatedTitle");
    divEl.style.backgroundColor = "green";
    divEl.style.padding = "12px";
    divEl.innerText = "Hello World!";
    const addText = document.createTextNode("Hello World!");
    divEl.appendChild(addText);
    document.body.appendChild(addText);
}
// createNodeList();



