const arr = [1,2,3,4,5,6,7];

const heroes = ["Shaktiman", "IronMan", "Hulk"];

console.log(arr);

console.log(arr[0]);

//Add element in last position.
arr.push(8);
console.log(arr);

//Remove element from last position.
arr.pop();
console.log(arr);

//Add element to first position.
arr.unshift(0);
console.log(arr);

//Remove element from last position.
arr.shift();
console.log(arr);

//check number include in array or not.
console.log(arr.includes(8));

//chech element on that index.
console.log(arr.indexOf(3));


//Give String of an array.
const newArray = arr.join();
console.log(newArray);

//Slice Splice

console.log("A ", arr);
const myn1 = arr.slice(1, 3)
console.log(myn1);


console.log("B ", arr);
const myn2 = arr.splice(1, 3)


console.log("C ", arr);
console.log(myn2);