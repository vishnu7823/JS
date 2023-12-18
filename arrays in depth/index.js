// 1) adding elements to the array
// const cart=["fruits","vegetables",1,true,null]
// const x=[1,2,3,4,5]

// console.log(x[1]);
// console.log(cart[4])

// //how to add dynamically values in the exisitng array

// x[5]=6
// console.log(x)
// //here we have countable number of elements what if 1000 number os elements??
// //push

// x.push("orange","vishnu") //it will add the element at the end of the array

// //unshift
// x.unshift('porsche','noida') //it will add element to the start of the array

// //splice
// x.splice(0,0,"fortuner","endavour") //splice(start,deletecount,string)
// x.splice(3,1,"polo")
// console.log(x);

// // 2)finding elements in the array[primitive values ]

// const items =[1,"vardhan",null,NaN,'vardhan']
// console.log(items.indexOf(1));
// console.log(items.indexOf('vardhan'));
// console.log(items.lastIndexOf('vardhan'));

// console.log(items.indexOf('vardhan')!==-1);
// console.log(items.indexOf("vishnu")!==-1);

// console.log(items.includes("vardhan"));
// console.log(items.includes("vishnu"))

// //for reference types

// const orders=[
//     {id:1,item:"Tshirt",quantity:2},
//     {id:2,item:"shirt",quantity:3},
//     {id:3,item:"pant",quantity:4},
// ]
// //using find()method

// let result=orders.find(function(orders){
//     return orders.item==="shirt"
// })
// console.log(result);

// let final=orders.findIndex(function(orders){
//     return orders.item==="pant"
// })

// console.log(final)

// // 3)removing elements in the array

// const integers=[22,45,67,89,90]

// //pop-remove elements from the end of the array
// integers.pop()
// console.log(integers);

// // //shift-remove elements from the start
// integers.shift()

// // splice-remove elements from middle
// integers.splice(1,2)
// console.log(integers);

// 4)emptying array

let x=[1,2,3,4,5]
let anothet_n=x

//method1
x=[]

//method2
x.length=[]


// //method3--not recomandable
 x.splice(0,x.length)

//method 4--its not recomadable for large datas
while(x.length){
    x.pop()
}
console.log(x)

// 5)combining arrays

const groceries=[{items:"flavour"}];
const additional_groceries=["matchbox","sugar"];

let result= groceries.concat(additional_groceries);
groceries[0].item="noodles"
console.log(result);

// 6)extracting arrays
let extract=result.slice(1,3)
console.log(extract);
// using spread operator to cancat
let receipe=[...groceries,...additional_groceries]
console.log(receipe)

   
