const myHeroes = ["thor","SpiderMan"];

const heroPower = {
    thor: "Hammer",
    spiderMan : "sling",

    getSpidyPower: function(){
        console.log(`SpiderMan Power is ${this.spiderMan}`);
    }
}

//Object is present in all like Arrays string function.
Object.prototype.Ravindra = function(){
    console.log("Ravindra is present in all object");
}

//Array is present only in a array.
Array.prototype.heyRavindra = function(){
    console.log("Ravindra says Hello")
}

myHeroes.Ravindra();
heroPower.Ravindra();
myHeroes.heyRavindra();
// heroPower.heyRavindra();

//ProtoTypal Inheritance :- 
var Human = {
    fullName : "Ravindra Singh",
    canFly : false,
    canTalk : true,
    willDie : true,
}


var sheryianshStudent = {
    solveJsQuestion: true,
    createModernWebsite : true,
    // __proto__: Human,
}

// sheryianshStudent.__proto__ = Human;

// modernSyntax
console.log(Object.setPrototypeOf(sheryianshStudent,Human));
console.log(sheryianshStudent.canTalk);



// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let anotherUserName = "Bhaiyu";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Ravindra".trueLength();
"gaurav".trueLength();
