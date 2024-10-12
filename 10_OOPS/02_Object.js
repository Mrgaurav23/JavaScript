function multiplyBY5(num){
    return num * 5;
}

multiplyBY5.power = 2;

console.log(multiplyBY5(5));
console.log(multiplyBY5.power);
console.log(multiplyBY5.prototype);

function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Your Price is: ${this.score}`);
}

const chai = new createUser("chai",25);
const tea = new createUser("tea",300);

console.log(chai);
chai.printMe();