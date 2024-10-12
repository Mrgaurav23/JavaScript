class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName is a ${this.userName}`);
    }

    static createId(){
        return `123`;
    }
}

class Teacher extends User{
    constructor(userName,email){
        super(userName);
        this.email = email;
    }
}

// const ravindra = new User("ravindra");
// console.log(ravindra.createId());

const iPhone = new Teacher("Iphone","i@phone.com");
iPhone.logMe();
console.log(iPhone.createId());