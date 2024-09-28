const userEmail = [];

if (userEmail) {
    console.log("Email present");
}
else{
    console.log("Email don't present.");
}

//FALSY VALUES
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES
//"false", "0", " ", [], {}, function(){};

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined.
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary Operator
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80"):console.log("More than 80");
