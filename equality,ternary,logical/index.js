// Equality operator:

//strict equality operator(datatype + value)
console.log(1===1) //nteger===integer
console.log('1'===1)//string===intger 

//lose equality oerator 
console.log(1==1) //integer==integer
console.log('1'==1) //string=integer

console.log(true=='1')


//ternary operator:
? - true : -false
let height=5.6

let selection=height>5.6 ? "selected" : "rejected"
console.log(selection)

// logical operator
//logical AND && returns   TRUE  if both operands are true otherwise false
console.log(true && true)
console.log(true && false)

//logical or || it reutns true if any one of the operands are true other wise false
console.log(true || false)
console.log(true || true)
console.log(false||false)

//not operator(!)
console.log(!true)

//logical operator with non boolean values.

console.log(false||'vishnu') //it will show the string value

//if differet dataypes is there it will chekc these conditions
//falsy(false)            //truthy(anything is not falsy)
//undefined                  
//null
//0
//false
//''-> ""
//NaN
console.log(true|| 0)

