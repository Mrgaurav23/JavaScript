//forin loops on object
const myObject = {
    "cpp": "C++",
    "js": "javaScript",
    "py" : 'Python',
    "java" : "java"
}

for (const key in myObject) {
    console.log(`${key} is shortcut of an ${myObject[key]}`);
}

// forin loops on array
const myHeroes = ["Ram","Hanuman","Krishna"];

for (const key in myHeroes) {
    console.log(`${key}, ${myHeroes[key]}`);
}

// forin loop in map
//It does not iterate on map.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }