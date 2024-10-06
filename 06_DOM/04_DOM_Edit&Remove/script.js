//Adding Values.
function addLanguage(langName){
    const liElement = document.createElement('li');
    liElement.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(liElement);
}
addLanguage("python")
addLanguage("typescript")
addLanguage("javaScript");

function addoptilanguage(langName){
    const liElement = document.querySelector("li");
    liElement.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(liElement);
}
addLanguage("java");

//Edit values.
function editLanguage(){
    const secondlanguage = document.querySelector("li:nth-child(2)");
    // secondlanguage.innerHTML = "C++";
    const newli = document.querySelector("li");
    newli.textContent = "C++";
    secondlanguage.replaceWith(newli);

    const firstLanguage = document.querySelector("li:nth-child(2)");
    firstLanguage.outerHTML = "<li>TypeScript<li>"
}
editLanguage();

//Remove Element
function removeLanguage(){
    const thirdlanguage = document.querySelector("li:nth-child(3)");
    thirdlanguage.remove();
    const lastlanguage = document.querySelector("li:last-child");
    lastlanguage.remove();
}
removeLanguage();