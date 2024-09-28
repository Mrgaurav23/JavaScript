const myArray = [1,2,3,4,5];

//forof loop is used to iterate values sourced from an iterable object.Iterable object include instances such as Array, String, TypedArray, Map, Set, NodeList and argument also

for (const num of myArray) {
    console.log(num);
}

const greeting = "Hello World!";

for (const greet of greeting) {
    console.log(greet);
}

//MAP.
const map = new Map();
map.set('In',"India");
map.set('Usa',"United States of America");
map.set('Fr',"France");

console.log(map);
for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key, ':-' ,value);  
}

// forOf loop don't run on object.
const myObject = {
    1: "banana",
    2: "Apple",
    3: "orange",
}
// for (const [key,value] of myObject) {
//     console.log(key,value);
// }