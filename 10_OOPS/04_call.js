function setUserName(userName){
    //Complex DB call
    this.userName = userName;
    console.log("called")
}

function createUser(userName,email,password){
    setUserName.call(this,userName);

    this.email = email;
    this.password = password;
}

const user = new createUser("Ravindra","ravindraexample@gmail.com","123");
console.log(user);