//objects

let person={
    name:"vardhan",
    age:20,
    gender:"male",
    address: "trichy,tamilnadu",
    siblings:{
        brother:"john",
        sister: "elsa"
    }
}

console.log(person)

//for getting values of object we can use 2 methods

//dot notation
console.log(person.name.age)

//bracket notation
console.log(person['gender'])

console.log(person.siblings.brother)//can access sub object values also
