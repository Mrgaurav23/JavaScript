
class User{
    constructor(fullName, email,password){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

    get password(){
       return `${this._password.toUpperCase()}RavindrA`;
    }
    set password(value){
        this._password = value;
    }
    
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}

const user = new User("Ravindra Singh","Ravindraexample@gmail.com","jaddu");
console.log(user.password)
console.log(user.email);