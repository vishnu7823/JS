//factory functions 

function createperson(name){ //camelcase:myFirstName
    return{
        name:name,  //if key nad value have the same names like (name:name,) put it like this name,
        greeting:function(){
            let msg=`my name is ${this.name}`
            console.log(msg)
        }
    }
}

let vishnu=createperson("vishnu")
let john=createperson("john") 
vishnu.greeting()
john.greeting()
    
//constructor functions

function Person(name){  //pascal case:MyFirstName
    this.name=name;
    this.greeting=function(){
        console.log(`my name is ${this.name}`)
    }

}

let person=new Person("vishnu")
letx={}
person.greeting()
   

    


