/*
Promises :-
A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more elegantly than using callbacks and provides methods for handling success and failure.

MDN PROMISE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

//Task 1 Completed.
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task 1 completed");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Completed task");
})

//Task 2 Completed.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Completed Task 2");
})

//Task 3 Completed.
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 3 completed");
        resolve({userName:"Ravindra",email:"Ravindraexample@gmail.com",age:22,});
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//Task 4 Completed
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:"Ravindra",email:"Ravindraexample@gmail.com",age:22,})
        }
        else{
            reject("Something Went Wrong");
        }
    }, 1000);
})
promiseFour.then(function(user){
    console.log(user);
}).catch(function(error){
    console.log(error);
})

//Task 5 Completed.
const promiseFive = new Promise( (resolve,reject) => {
    setTimeout( () => {
        let error = false;
        if(!error){
            resolve({userName: "Gaurav Singh",age: 22,isLoggedIn: "true"});
        }
        else{
            reject("Error : SomeThing Went Wrong");
        }
    },1000)
})

promiseFive.then((user) =>{
    return user.userName;
})
.then( (userName)=>{
    console.log(userName);
})
.catch( (error) =>{
    console.log(error);
})
.finally(() =>{
    console.log("The promise is either resolved or rejected");
})

//Task 6
const promiseSix = new Promise(function(resolve,reject) {
    setTimeout( () => {
        let error = true;
        if(!error){
            resolve({userName:"javaScript",email:"jsexample@gmail.com",age:22,});
        }
        else{
            reject("Error : SomeThing Went Wrong");
        }
    },1000)
})

/*
Async Await :- 
async/awiat is a syntactic sugar for writing asynchronous code in a synchronous-like manner. async functions return a promise, and await can be used inside async functions to pause execution until a promise is resolved.
*/

async function consumePromiseSix() {
    try{
        const response = await promiseSix;
        console.log(response);
    }catch(error){
        console.log(error)
    }
}
consumePromiseSix();

// fetch
async function getAllUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: Error")
    }
}

// getAllUser();

fetch("https://randomuser.me/api/")
.then( (response) => {
    return response.json();
})
.then( (data) =>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})




