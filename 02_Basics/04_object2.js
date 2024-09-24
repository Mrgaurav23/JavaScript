//Singleton.
//make object with singleton
const instaUser = new Object();
console.log(instaUser);

//Give information to object
instaUser.id = "123abc";
instaUser.name = "Ravindra";
instaUser.age = "20";
instaUser.isLoggedIn = false;
console.log(instaUser);

//Nested object 
const anotherUser = {
    email: "some@example.com",
    fullName:{
        userFullName:{
            firstName:"Rohit",
            lastName: "Sharma",
        }
    }
}
console.log(anotherUser.fullName.userFullName);

//Merge two objects.
const obj1 = {
    1:"Ironman",
    2:"SpiderMan"
}
const obj2 = {
    3:"Hanuman",
    4:"Shaktiman",
}

const obj3 = {
    5:"SuperMan",
    6:"Joker",
}

//This is not merge the object it gives object in objects.
const obj4 = {
    obj1,
    obj2,
}
console.log(obj3);

// Here we concat the object with assign.
const obj5 = Object.assign({},obj1,obj2);
console.log(obj4);

// we also use spread operator just like array to cancat the object
const obj6 = {...obj1,...obj2,...obj3};
console.log(obj6);

// object in arrar
const user = [
    {
        id: 1,
        email: "someexample@.com"
    },
    {
        id: 2,
        email: "someexample1@.com"
    },
    {
        id: 3,
        email: "someexample3@.com"
    }
]
const user1Info = user[1].email;
console.log(user1Info);

//Give datatype array
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

//key present or not in an object
console.log(instaUser.hasOwnProperty('isLoggedIn'));


// +++++++++++++++++++++++++++ Object Destructing and JSON API+++++++++++++++++++

const course = {
    courseName: "Java Programming",
    coursePrice: 999,
    courseInstructor: "Vishu Sir",
}
console.log(course.courseInstructor);

// Object Destructing
const {courseInstructor:instructor} = course;
console.log(instructor);

//API
//JSON
// {
//     "name" : "vidhu",
//     "course" : "c++",
//     "price" : "free",
// }

[
    {},
    {},
    {}
]
