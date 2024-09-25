//1.Make A Function
function myName(){
    console.log("Ravindra");
}
// myName();

//2. Make a function and add two numbers
function addTwoNumber(num1 , num2){
    console.log(num1 + num2);
}
// addTwoNumber(3,5);

//3.Here we check result value.
function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}
const result  = addTwoNumber(3,3);
// console.log("Result:",result);
// Output:Result Value is undefined.

//4.Here we return value
function addTwoNumber(num1,num2){
    return num1 + num2;
}
const result1 = addTwoNumber(6,7);
// console.log("Result:",result1);

//5.
function addTwoNumber(num1,num2){
    let result = num1 + num2;
    return result;
}
// console.log(addTwoNumber(5,5));

// 6.
function loginUserMessage(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage())


//7.
function loginUserMessagee(username){
    console.log(`${username} just logged in`)
}
// loginUserMessagee("ravindra");

// +++++++++++++++++++++++++++++++++Function With Object+++++++++++++++++++++

//How to get more values in a parameter?
//With the help of Rest operator.
function calcCartVal(...num1){
    return num1;
}
// console.log(calcCartVal(200,300,500,700));

function calcCartVal1(val1,val2,...num1){
    return val1,val2,num1;
}
// console.log(calcCartVal1(200,400,500,2000));

// Function in object.
const user = {
    userName: "Ravindra",
    age: 22,
    isLoggedIn: true,
}
function userDetails(anyObject){
    return console.log(`Username is ${anyObject.userName},age is ${anyObject.age},Logged in ${anyObject.isLoggedIn}`);
}
//First way
userDetails(user);
//Second way
userDetails({
    userName: "Gaurav",
    age:"22",
    isLoggedIn:false,
})

//Function in Array
const myArray = [1,2,3,4,5];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([1,2,3,4,5]));