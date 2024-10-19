const User = {
    _email : "Ravindraexample@gmail.com",
    password : "jaddu",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const user = Object.create(User);
console.log(user.email);