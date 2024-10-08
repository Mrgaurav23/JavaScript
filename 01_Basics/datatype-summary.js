/*
Primitive

7 types: Number, BigInt, String, Boolean, null, undefined, Symbol;


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

*/

/*
Reference(Non Primitive)

Arrays, Object, Function;
// Array, Objects, Functions

const heros = ["shaktiman", "murali", "hanuman"];


let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

*/


//++++++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++++++++++++++++++//

//STACK(Primitive) , HEAP(Reference)

let myName = "Ravindra";
let anotherName = myName;
anotherName = "Bhaiyu";

console.log(myName);
console.log(anotherName);

let myInfo = {
    name : "Ravindra",
    age : 20,
    email : "ravindraexample@gmail.com",
}

let myInfoTwo = myInfo;

myInfoTwo.age = 25;

console.log(myInfo.age);
console.log(myInfoTwo.age);