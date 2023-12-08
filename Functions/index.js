function greetuser(){
    //set of statements
    let name="vishnu";
    let msg="hello" +  name  + "i am learning js";
    console.log(msg)
}

greetuser()


function addressuser(name){ //(name)-its is parameter
    //set of statements
    
    let msg="hello" +  name  + "i am learning js";
    console.log(msg)
}

addressuser("john")//parameter value it means argument.
addressuser("vishnu")

function user(firstname,lastname){
    let msg="hello" +firstname+ " " +lastname+ "iam learning js"
    console.log(msg)

}
user("vishnu","vardhan")

function add(number1,number2){
    console.log(number1+number2)
}

add(25.50,50)