let greetconsole=(name)=>{
    console.log("hello",name)
}
greetconsole("vishnu")

let greetheading=(name)=>{
    const heading=document.querySelector('h1')
    heading.innerHTML='hello my name is ' +   name
}
greetheading("vardhan")

function greet(callback){
    callback("ram")
}

// greet(greetconsole)
greet(greetheading) 

//for each

let arr=['vishnu','vardhan','john']
arr.forEach( (val) => {
    console.log(val)
})

arr.forEach((val,index,arr)=>{
    arr[index]=val.toUpperCase()
})
console.log(arr)

// function num(val){
//     console.log(val)
// }


let array1=['CSE','ASE','MEC','ATE']

array1.forEach(val =>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendchild(opt)
})