const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
/*
Key characteristics of Substring:

If either startIndex or endIndex is less than 0 or greater than the string's length, they are treated as if they were 0 and the string's length, respectively.
If startIndex is greater than endIndex, the method swaps the two arguments, effectively making substring(startIndex, endIndex) equivalent to substring(endIndex, startIndex).

*/

const newString = gameName.substring(0, 4)
console.log(newString);

/*Key characteristics of Slice:

If startIndex is negative, it is treated as string.length + startIndex.
If endIndex is negative, it is treated as string.length + endIndex.
If startIndex is greater than endIndex, slice returns an empty string.*/
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
