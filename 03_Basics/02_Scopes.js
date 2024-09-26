//var is function scope.
//let is blocked scope.

let scope1 = 20;
const scope2 = 30;
var scope3 = 40;

if(true){
    let scope1 = 10;
    const scope2 = 20;
    // console.log("Inner :",scope1);
    var scope3 = 30;
}

// console.log(scope1);
// console.log(scope2);
// console.log(scope3);

function one(){
    const userName = "Ravindra";

    function two(){
        const website = "Duo-Studio";
        console.log(userName);
    }
    // console.log(website); give Error 

    two();
}
// one();

if(true){
    const userName = "Ravindra";

    if(userName === "Ravindra "){
        let website = "Autono" 
        console.log(userName + website);
    }
    // console.log(website); Give Error
}

// ++++++++++++++++++++++Interesting+++++++++++++++++++++//

// console.log(three(5));
function three(num){
    return num + 1;
}

const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(5));

