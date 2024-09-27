const isUserLoggedIn = true;
const temperature = 41;

//if else condition
if(temperature === 40){
    console.log("Less than 50")
}
else{
    console.log("Temperature is more than 50");
}

console.log("Execute");

//<, >, <=, >=, ==, !=, ===, !== .

const score = 200;

if(score > 100){
    let power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User Power ${power}`);

const balance = 1000;

if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("Less than 50");
}
else if(balance < 700){
    console.log("less than 700");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("More than 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}