const marvelHeroes = ["IronMan","SpiderMan","Hulk"];
const dcHeroes = ["SuperMan","BatMan","Flash"];
const indianHeroes = ["Hanuman", "Minnal", "Bhairava"];

console.log(marvelHeroes);
console.log(dcHeroes);
console.log(indianHeroes);


//Push & Pop operation
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
marvelHeroes.pop();

//concat Operator
const hollyHeroes = marvelHeroes.concat(dcHeroes);
console.log(hollyHeroes);

//Spread operator
const allHeroes = [...marvelHeroes,...dcHeroes,...indianHeroes]
console.log(allHeroes);

// arr2
const arr = [1,2,3,[4,5,3],1,5,[7,9,8],2];
console.log(arr);

// flat method create a new subarray of element
const anotherArr = arr.flat(Infinity);
console.log(anotherArr);


console.log(Array.isArray("Ravindra"));
// return after convert to array
console.log(Array.from("Ravindra"));
// give empty array
console.log(Array.from({name: "Ravindra"})); //Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

//make a array and return
console.log(Array.of(score1,score2,score3));