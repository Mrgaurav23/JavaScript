/*
In JavaScript, an API (Application Programming Interface) allows different software components to communicate with each other. APIs can be used to send requests to servers, get data, and perform various operations. 
*/

//XMLHttpRequest : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// For Reading API - JSON Formatter

const requestURL = "https://randomuser.me/api/";
const xhr = new XMLHttpRequest();
xhr.open('Get',requestURL);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(typeof data)
        console.log(data.info);
        console.log(data.info.seed);
    }
}
xhr.send();

//V8 engine: https://github.com/v8/v8.