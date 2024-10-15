const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

const product = {
    name : "Shirt",
    price : 250,
    isAvailable : "true",
    orderProduct : () => {
        console.log("Product Not Available");
    }
}

console.log(Object.getOwnPropertyDescriptor(product,"name"));

Object.defineProperty(product,"name",{
    writable:false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(product,"name"));

for (let [key,value] of Object.entries(product)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);   
    }
}