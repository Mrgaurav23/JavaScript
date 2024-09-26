//Immediately Invoked Expression Function,

(function one(){
    console.log("DB connected");
})();

((name) => {
    console.log(`DB connected ${name}`);
})("Ravindra");