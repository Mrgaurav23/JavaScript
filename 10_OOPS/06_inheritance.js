class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`UserName is a ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.userName}`);
    }
}

const user = new Teacher("Ravindra","ravindraexample@gmail.com","44321");
user.addCourse();

const newUser = new User("Gaurav");
newUser.logMe();

console.log(user instanceof Teacher);
