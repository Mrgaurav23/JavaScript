class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`;
    }
}

const user = new User("Ravindra","ravindra@gmail.com","1223");
console.log(user);
console.log(user.encryptPassword());
console.log(user.changeUserName());

//Behind the scenes,
function User1(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User1.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`;
}

const tea = new User1("gaurav","gauravexample@gmail.com","123");
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
