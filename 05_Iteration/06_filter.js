const coding = ["javaScript", "java", "C++", "python",];

// forEach does not return the values it return undefined in this case.
const values = coding.forEach( (val) => {
    // console.log(val);
    return val;
})

// console.log(values);

// Filter return the values as we want.
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (nums) => (nums >= 4 ));
// when we use {} we want to return the value.
const newNums1 = myNums.filter( (nums) => {
    return nums >= 4;
})
// console.log(newNums);
// console.log(newNums1);

// From ForEach we return the values
let newNums2 = [];

myNums.forEach( (nums) => {
    if(nums >= 4){
        newNums2.push(nums);
    }
});
// console.log(newNums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => (bk.genre === "History"));

userBooks = books.filter( (bk) => {
    return bk.publish <= 2000 && bk.genre === "History"
})

console.log(userBooks);