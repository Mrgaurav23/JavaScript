const myCoding = ["java","javaScript","C++","python"];

// forEach on normal function
myCoding.forEach( function(val){
    // console.log(val);
});

//forEach on arrow function
myCoding.forEach( (val) => {
    // console.log(val);
})

// forEach on function
function printMe(val){
    console.log(val);
}
// myCoding.forEach(printMe);

// In forEach three parameter present value,index,and arrayList.
myCoding.forEach((val,index,arr)=>{
    // console.log(val,index,arr);
});

//Array in object
const coding = [
    {
        languageName: "javaScript",
        lamguageFile: "js",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "python",
        languageFile: "py",    
    },
    {
        languageName: "C++",
        languageFile: "cpp",
    }
]

coding.forEach( (val) => {
    console.log(val.languageName);
    console.log(val.languageFile);
})