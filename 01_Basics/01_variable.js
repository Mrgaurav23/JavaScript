const accountId = 3241231;
let accountEmail = "gauravexample@gmail.com";
var accountPassword = 5434645;
accountCity = "Multai";
let accountState;

//accountId is not changed because const variable is fixed

accountEmail = "ravindraexample@gmail.com";
accountPassword = "0986755";
accountCity = "bhopal";

/*
Prefer not to use var because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);