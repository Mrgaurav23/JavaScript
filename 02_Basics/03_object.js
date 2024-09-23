const mySymbol = Symbol("Key1");

//Object literals
const Student = {
    name: "Ravindra",
    "fullName": "Ravindra Rajput",
    age: 20,
    location: "Multai",
    email: "ravindraexample@.com",
    isLoggedIn: true,
    lastLoggedIn: ["monday","Saturday"],
    marks: [80,90,70,30,20],
    [mySymbol] : "key1",
}

// access object
console.log(Student.email);
console.log(Student["email"]);
console.log(Student.fullName);
console.log(Student["fullName"]);
console.log(Student[mySymbol]);

// for updating object value
Student.email = "RavindraBhai@gmail.com";
console.log(Student.email);

//After freezing object we can't change properties value.
Object.freeze(Student);
Student.email = "RavindraBaba@gmail.com";
console.log(Student.email);


//Function Treat as variable.
Student.greeting = function(){
    console.log("Hello");
}
Student.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Student.greeting());
console.log(Student.greetingTwo());

