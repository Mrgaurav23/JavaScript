//Window is a Object
console.log(window);

//Document is a document of a webpage
console.log(window.document);

//If we want direct access to document we directly pass the document to console.
console.log(document);

//If we want full information of document we use dir
console.dir(document);

//We want additional information of document we use document.AnyElement,
//And in document.AnyElement is a HTMLCOLLECTION not an array.
console.log(document.links[0]);

//Selecting id.
const paragraphEl = document.getElementById('paragraph');
console.log(paragraphEl);
//we want to change something.
paragraphEl.innerHTML = "kardiya na change";