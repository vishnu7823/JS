//inbuild objects

console.log(Math.SQRT1_2)
 console.log(Math.abs(-10));// abs ->absolute value
 //refer this site for more methods and properties (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

console.log(Math.ceil(9.9)) //Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(0.9)) //Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.

//incase if we want a random numbers between some range

console.log(Math.random()*(100-1)+1);//this logic is for bw the range 

console.log(Math.round(1.5)) //Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.max(10,0,30,50)) //Returns the larger of a set of supplied numeric expressions.

console.log(Math.min(2,3,4,5,0)); //Returns the smaller of a set of supplied numeric expressions.

//ex
let marks=[40,70,80,90,99]
let result=Math.max(...marks) //using spread operator
console.log("max num is "+result)

let score=[55,67,89,101]
let announce=Math.min(...score)
console.log(`min number is ${announce}`)