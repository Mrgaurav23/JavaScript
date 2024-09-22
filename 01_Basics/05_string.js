let name = "Ravindra";
let repocount = 3;

//This is not a good practice for writing a code.
console.log(name + " "  + repocount + " number");

//This is good practice for writing a code
console.log(`My name is ${name} my reposretories count is ${repocount}`); 


let gameName = new String('Ravindra babu');
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(2,5);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringTwo = new String('    Ravindra    ');
console.log(newStringTwo);
console.log(newStringTwo.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
