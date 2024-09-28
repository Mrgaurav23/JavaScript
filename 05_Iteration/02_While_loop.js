//WHILE LOOP
let index = 0 ;

while(index <= 10){
    console.log(`value of index is ${index}`);
    index++;
}

//LOOP ON ARRAY WITH WHILE LOOP
let myArray = ["IronMan","Hulk","Spiderman"];

let i = 0;
while (i <= myArray.length) {
    console.log(myArray[i]);
    i++;
}

let score = 0;

//DO WHILE LOOP.
do{
    console.log(`Score is: ${score}`)
    score++;
}while (score <= 10);