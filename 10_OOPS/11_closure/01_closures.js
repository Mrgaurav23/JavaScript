/*
Lexical Scope: The definition area of an expression, determining access to variables based on their declaration, not usage location.
*/
function outer(){
    let userName = "Ravindra";
    function inner(){
        let secret = "jai ho";
        console.log(`inner: ${userName}`);
    }
    function innerTwo(){
        // console.log(secret); this has no access of inner variable
        console.log(`innerTwo : ${userName}`);
    }
    inner();
    innerTwo();
    console.log(`outer: ${userName}`)
}
// outer();


/*
Closures : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
*/ 
function makeFunc(){
    let name = "gaurav";
    function displayFunc(){
        console.log(name);
    }
    return displayFunc();
}
const myFunc = makeFunc();

