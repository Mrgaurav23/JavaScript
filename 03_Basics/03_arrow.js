const user = {
    userName : "Ravindra",
    age : 22,

    welComeMessage : function(){
        console.log(`${user.userName}, Welcome to our site`);
        console.log(`${this.userName}, welcome to our site`);
        console.log(this);
    },
}

user.welComeMessage();
user.userName = "sam"
user.welComeMessage()

console.log(this);

function one(){
    console.log(this);
}
// one();


function user1(){
    let userName = "Ravindra";
    console.log(this.userName);
}
// user1();


const user2 = function(){
    let userName = "Ravindra";
    console.log(this.userName);
}
// user2();


const user3 = () => {
    let userName = "Ravindra";
    console.log(this.userName);
    console.log(this)
}
// user3();

const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(4,5));

const addTwo1 = (num1,num2) => num1 + num2;
console.log(addTwo1(4,5));

const addTwo2 = (num1,num2) => (num1 + num2);
console.log(addTwo2(4,5));

const addtwo3 = (num1,num2) => ({userName : "Ravindra"});
console.log(addtwo3());

