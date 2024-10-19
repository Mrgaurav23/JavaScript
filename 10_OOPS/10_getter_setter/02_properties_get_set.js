function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,"password",{
        get : function(){
            return this._password.toUpperCase();
        },
        set : function(value){
            this._password = value;
        }
    })
    Object.defineProperty(this,"email",{
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
}

const user = new User("Ravindraexample@gamil.com","pikachu");
console.log(user.password);
console.log(user.email);

/*
Using Object.defineProperty()
Alternatively, you can use Object.defineProperty() to add getters and setters to an object:

//code

In this example, we use Object.defineProperty() to add a getter method _email and a setter method _email to the User object.
*/