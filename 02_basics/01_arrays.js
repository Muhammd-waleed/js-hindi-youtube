// array
// first way
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
// second way 
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// push is used to insert one or more elemnt in the array but in last 

// myArr.push(6)
// myArr.push(500,600,600)
// myArr.push(7)

// pop is used to remove the last element from the array 
// myArr.pop()


// unshift is used to insert  one or more elemnet in the start of the array
// myArr.unshift(9)

// shift is used to remove the elemnet from the start of the array
// myArr.shift()


// questioning methods 
// console.log(myArr.includes(9));


// console.log(myArr.indexOf(3));

// join convert the array into string
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// slice just give the value that are beteeen the ragnge 
// but splice give the value that are between in the range and remove from the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
