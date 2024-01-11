//map

let productKG=[10,20,30]
let productTON= productKG.map(x => x*1000)
console.log(productTON)

productTON=productKG.map(convert)
function convert(val){
    return val*1000
}
console.log(productTON)

const input = [
    {name:'tony',age:25},
    {name:'vishnu',age:20},
    {name:'vardhan',age:21},
    {name:'vicky',age:19},
]

const names=input.map(x=>x.name)
console.log(names) 


//filter-returns a new array by checking each value of original
// array using call back fn

let cost=[20,56,123,34,456]
let lessThan100=cost.filter(x => x<100)
console.log(lessThan100)


//reduce
let price=[24,236,43,67,101]
let fullTotal=price.reduce((total,el)=>total+el,2000)
console.log(fullTotal)

