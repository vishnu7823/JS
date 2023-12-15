//syntax
// switch(condition){
//     case 1:
//         console.log("1");
//     case 2:
//         console.log("2");
//     default:
//         console.log("default")

// }

function feedback(grade)
{
    switch(grade){

        case "A":
        console.log("A grade")
        break;

        case "B":
        console.log("B grade")
        break;

        case "C":
        console.log("C grade")
        break;

        default:
            console.log("enter appropriate grade")
    }
}

feedback("D")
feedback("A")

//give conditions as order wise(gretaer first smaller next)
function pass(marks){
    switch(true){
    
        case marks>90:
            console.log("excellent")
            break;

            case marks>80:
                console.log("very good")
                break;

            case marks>70:
            console.log("good")
            break;
    
        case marks>50:
            console.log("average")
            break;
        
        
            case marks>=35:
            console.log("pass")
            break;
        
        default:
            console.log("fail")
            break;

    }
}

pass(99)
pass(35)
pass(55)
 

//ex

function purchase(money){
    switch(true){
        case money>60000:
            console.log("go for iphone mobile")
            break;
        case money>10000:
            console.log("go for andriod mobile")
            break;
        case (money>5000 && money<10000):
            console.log("go for basic mobile")
            break;
        default:
            console.log("you cant afford a phone")
    }
}

purchase(75000)
purchase(2000)
purchase(11000)