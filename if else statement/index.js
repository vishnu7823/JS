//conditonal statement

let condition = true

if(condition) //use cury bracket to use multiple condiotns or statemnets other wise it will show error
{
    console.log("condition:true")
}
else
{
console.log("condition:false")
}

//example
let x=20

if(x>20)
{
    console.log("greater")

}
else{
    console.log("smaller")
}

//ex2

let climate="hot"
if(climate==="rain")
{
    console.log("climate is rainy")
}
else{
    console.log("weatber is hot")
}

// ex3
let raining=true
let cloudy= false

if(raining || cloudy)
{
    console.log("take umbrella")
}
else{
    console.log("enjoy the weather")
}

//example
//consider time as 24hrs starts from 0
let time=prompt("please enter the time")

if(time>=0 && time <=13)
{
    console.log("good morning")
}
else if(time>13 && time<=17)
{
    console.log(alert("good afternoon"))

}
else{
    console.log("good evening")
}


//use new date() for real time

let hrs=new Date()
let hours=hrs.getHours()

if(hours>=0 && hours <=13)
{
    console.log("good morning")
}
else if(hours>13 && hours<=17)
{
    console.log(alert("good afternoon"))

}
else{
    console.log("good evening")
}
