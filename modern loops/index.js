//for in loop

let patient={
    name:"vishnu",
    age:24,
    height:5.8
};

for(let key in patient){
    console.log(key+":",patient[key])
}

// how to use this in array

let cars=["porsche","mercedes","bentley","Buccatti"];

for(let key in cars){
    // console.log(key)//it display the index of the array
    console.log(cars[key]) //it display the index values as per order

}


//for of loop

for(let car of cars){
    console.log("car:"+ cars)
}

