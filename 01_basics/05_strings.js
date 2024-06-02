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
/* length: Returns the length of the string.

javascript
Copy code
let str = "Hello";
console.log(str.length); // 5
charAt(): Returns the character at a specified index.

javascript
Copy code
console.log(str.charAt(0)); // "H"
charCodeAt(): Returns the Unicode of the character at a specified index.

javascript
Copy code
console.log(str.charCodeAt(0)); // 72
concat(): Joins two or more strings.

javascript
Copy code
let str2 = "World";
console.log(str.concat(" ", str2)); // "Hello World"
includes(): Checks if a string contains a specified value.

javascript
Copy code
console.log(str.includes("ell")); // true
indexOf(): Returns the index of the first occurrence of a specified value.

javascript
Copy code
console.log(str.indexOf("e")); // 1
lastIndexOf(): Returns the index of the last occurrence of a specified value.

javascript
Copy code
console.log(str.lastIndexOf("l")); // 3
match(): Searches a string for a match against a regular expression and returns the matches.

javascript
Copy code
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g)); // ["ain", "ain", "ain"]
replace(): Replaces a specified value with another value in a string.

javascript
Copy code
console.log(text.replace("rain", "snow")); // "The snow in SPAIN stays mainly in the plain"
search(): Searches a string for a specified value and returns the position.

javascript
Copy code
console.log(text.search("SPAIN")); // 12
slice(): Extracts a part of a string and returns it as a new string.

javascript
Copy code
console.log(text.slice(4, 8)); // "rain"
split(): Splits a string into an array of substrings.

javascript
Copy code
console.log(text.split(" ")); // ["The", "rain", "in", "SPAIN", "stays", "mainly", "in", "the", "plain"]
substring(): Extracts characters from a string between two specified indices.

javascript
Copy code
console.log(text.substring(4, 8)); // "rain"
toLowerCase(): Converts a string to lowercase letters.

javascript
Copy code
console.log(text.toLowerCase()); // "the rain in spain stays mainly in the plain"
toUpperCase(): Converts a string to uppercase letters.

javascript
Copy code
console.log(text.toUpperCase()); // "THE RAIN IN SPAIN STAYS MAINLY IN THE PLAIN"
trim(): Removes whitespace from both ends of a string.

javascript
Copy code
let paddedStr = "   Hello   ";
console.log(paddedStr.trim()); // "Hello"
trimStart(): Removes whitespace from the beginning of a string.

javascript
Copy code
console.log(paddedStr.trimStart()); // "Hello   "
trimEnd(): Removes whitespace from the end of a string.

javascript
Copy code
console.log(paddedStr.trimEnd()); // "   Hello"
padStart(): Pads the current string with another string until the resulting string reaches the given length.

javascript
Copy code
console.log(str.padStart(10, "X")); // "XXXXXHello"
padEnd(): Pads the current string with another string until the resulting string reaches the given length.

javascript
Copy code
console.log(str.padEnd(10, "X")); // "HelloXXXXX"
repeat(): Returns a new string with a specified number of copies of the original string.

javascript
Copy code
console.log(str.repeat(3)); // "HelloHelloHello"
startsWith(): Checks if a string starts with a specified value.

javascript
Copy code
console.log(str.startsWith("He")); // true
endsWith(): Checks if a string ends with a specified value.

javascript
Copy code
console.log(str.endsWith("lo")); // true
localeCompare(): Compares two strings in the current locale.

javascript
Copy code
console.log("a".localeCompare("b")); // -1
fromCharCode(): Creates a string from Unicode values.

javascript
Copy code
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"*/
