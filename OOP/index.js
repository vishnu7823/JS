// object oriented programming(oop)

let person={
    name:"vishnu",
    age:20,
    skills:["photography","writing"],
    isAlive:true,
    address:{
        city:"trichy",
        state:"Tamil Nadu"
    },
    greeting:function(){
        let msg=`my name is ${this.name},my skills are ${this.skills}` //this -is used to acces the key and its value form the same object by the functions
        console.log(msg)
    }

}
person.greeting()


//ex

let showroom={
    name:"vichuu motors",
    bike:"royal enfield",
    models:["classic350","hunter","bullet 350","meteor"],
    landmark:{
        city:"namakkal",
        place:"salem road"
    },
    customer:function(){
        let welcome=`welcome sir this is${this.bike}showroom.
        what are the models you have.we have${this.models}`
        console.log(welcome)
    }
}
showroom.customer()