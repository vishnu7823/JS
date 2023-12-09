//Arithmetic operators

function operations(){
let num1=60;
let num2=30;

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2) //gives remainder
console.log(num1**num2)//exponential
}

operations()


//increment operators(++)

let n1=5
let n2=10
console.log(++n1) //1+5=6
console.log(n1++) //6 +1=7(return only n1 value(6))
console.log(n1)//7

//decrement(--)
let num1=2
let num2=4
console.log(num1--)//2-1=1(return only num1 value(2))
console.log(num1)//1 

console.log(--num1) //1-1=0

//ASSIGNMENT OPERATORS
function assignment(){
let x=10; //=operator
//x=x+2
x+=2 //+= poerator 
//x=x-2
x-=2
//x=x*2
x*=2 //*= operator
//x=x/2
x/=2 ///=operator
//x=x%2
x%=2 //%= operator
// x=x**2
x**=2

console.log(x)
}

assignment()

//COMPARISION OPERATORS , return boolean values

//relational operators
let a=1;
console.log(a>5) //returns boolean value
console.log(a<5)
console.log(a<=5)
console.log(a>=5)

//equality operators
let b=10
console.log(b===10) //10===10
console.log(b!=10) //b is not equal to 10

//string comparision
console.log('vish' > 'vard') //dictionary method to analyze
// v-v
// i-a
// s-r
// h-d comapre with alphabetical order.

//comparsion of different type
console.log('1'<5)//true bcoz js is case sensitive it consider 1 as integer
console.log('vishn'<5) //false
console.log(true==1)//true .true=1,false=0
console.log(true==0)//false
console.log(false==0)

