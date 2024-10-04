//What is DOM ?
//The Document Object Model (DOM) is a programming interface that represent a web page as a tree of nodes and objects. It allows programmers to change the structure,style and content of a web page using scripting languages like javaScript.

//Selecting id.
function selectingId(){
    const idElement = document.getElementById("id-elem");
    idElement.innerHTML = "CHANGE ID DOM SELECTOR";
    idElement.getAttribute('id');
    idElement.setAttribute("class","heading1");
    idElement.style.backgroundColor = "red";
    idElement.style.padding = "15px";
    idElement.style.borderRadius = "20px";
}

//Selecting class
function selectingClass(){
    const h4Element =  document.getElementsByClassName("h4-elem");
    const myConvertedArray = Array.from(h4Element);
    myConvertedArray.forEach((elem) => {
        elem.style.color = "orange";
    })
}


//Selecting Content
function selectionContent(){
    idElement.textContent;
    idElement.innerHTML;
    idElement.innerText;
}

//Selection of an Element.
function SelectionElement(){
    const h3Element = document.querySelector("h3");
    h3Element.setAttribute("id","h3-elems")
    const h3IDElement = document.querySelector("#h3-elems");
    const h3classElement = document.querySelector(".h3-elem");
    document.querySelector('input [type = "password"]');
    h3Element.style.backgroundColor = "green";
    
    const myul = document.querySelector("ul");
    const turnPurple = myul.querySelector("li")
    turnPurple.style.backgroundColor = "purple";
    turnPurple.style.padding = "10px";
}



//Changing Multiple elements at a same time ?
function multipleSelectionElement(){
    const tempLi = document.querySelectorAll("li");
    tempLi.forEach( (li) => {
        li.style.backgroundColor = "blue"
    });
    tempLi[1].style.color = "yellow";
}

function callFunction(){
    selectingId();
    SelectionElement();
    multipleSelectionElement();
}

callFunction();