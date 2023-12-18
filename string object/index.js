//string object inbuild functions

let firstname="vishnu"
let lastname="manivel"
console.log(firstname.length) //Returns the length of a String object.

console.log(firstname.charAt(4)); //The zero-based index of the desired character. Returns the character at the specified index.

console.log(firstname.charCodeAt(4)) //eturns the Unicode value of the character at the specified location.
console.log(firstname.concat(' ',lastname)); //Returns a string that contains the concatenation of two or more strings.

console.log(firstname.includes("nu"));//returns true if the searching string appears in the string object.its is case sensitive

console.log(lastname.startsWith("ma")); //return true if the starting of the string is ma
console.log(lastname.endsWith("el")); //return true if the ending of the string is el

console.log(lastname.indexOf("i")); //returns the index value of the given string

console.log(lastname.repeat(5)); //repeat the string ipto the value we have passed

console.log(firstname.replace("vishnu","vardhan"));

console.log(firstname.slice(1)); //The index to the beginning of the specified portion of stringObj.Returns a section of a string.

let sentence="hello how you doing "
console.log(sentence.split(' ',3)); //it split  the string into identical and return as a array
console.log(sentence.substr(7)); //returns the balance string after the no of value passed

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(sentence.trim());//remove unneccessary space
console.log(sentence.trimStart());
console.log(sentence.trimEnd());

//escape notation

let msg="this is my house\" which is near to the park"


