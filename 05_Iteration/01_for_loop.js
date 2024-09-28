// for Loop.
for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element)
}


//Nested for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`inner loop value is ${i} & outer loop value is ${j}`);
        // print table
        console.log(`${i} X ${j} = ${i * j}` );
    }
}

//loops on array
let myHeroes = ["IronMan" , "SpiderMan" , "Hulk"];
console.log(myHeroes.length);
for (let i = 0; i < myHeroes.length; i++) {
    const element = myHeroes[i];
    console.log(element);
}

// Break and continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5");;
        break;  
    }
    console.log(`Value of index is ${i}`);
}

for (let i = 1; i <= 10; i++) {
    if(i == 7){
        console.log("Detected 7");
        continue;
    }
    console.log(`Value of index is ${i}`);
}