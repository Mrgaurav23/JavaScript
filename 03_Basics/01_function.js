//1.Make A Function
function myName(){
    console.log("Ravindra");
}
myName();

//2. Make a function and add two numbers
function addTwoNumber(num1 , num2){
    console.log(num1 + num2);
}
addTwoNumber(3,5);

//3.Here we check result value.
function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}
const result  = addTwoNumber(3,3);
console.log("Result:",result);
// Output:Result Value is undefined.

//4.Here we return value
function addTwoNumber(num1,num2){
    return num1 + num2;
}
const result1 = addTwoNumber(6,7);
console.log("Result:",result1);

//5.
function addTwoNumber(num1,num2){
    let result = num1 + num2;
    return result;
}
console.log(addTwoNumber(5,5));

// 6.
function loginUserMessage(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage())


//7.
function loginUserMessagee(username){
    console.log(`${username} just logged in`)
}
loginUserMessagee("ravindra");