//Object Literal.
const user = {
    username : "Ravindra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Get user details from database");
        // console.log(`UserName: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName,loginCount,isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome: ${this.userName}`);
    }
    return this;
}

//Constructor
const userOne = new User("Ravindra", 5, true);
const userTwo = new User("Gaurav",20,false);
console.log(userOne.constructor);
// console.log(userTwo);
