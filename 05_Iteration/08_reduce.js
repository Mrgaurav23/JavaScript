const myNums = [1,2,3,4,5,6];

const myTotal = myNums.reduce(function(accumalator,currentValue){
    console.log(`acc: ${accumalator} and currval: ${currentValue}`);
    return accumalator + currentValue;
},0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "jsCourse",
        itemPrice : 999,
    },
    {
        itemName: "javaCourse",
        itemPrice: 999,
    },
    {
        itemName: "pythonCourse",
        itemPrice: 999,
    },
    {
        itemName: "MLCourse",
        itemPrice: 1299,
    },
];

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.itemPrice;
},0)
console.log(`Total price is : ${priceToPay}`);