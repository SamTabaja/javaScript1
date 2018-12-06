//4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' 
//for example when called as vehicleType("blue", 2)
console.log('QUESTION-4');

function vehicleType(color, code){
    if(code == 1){
        console.log(color + " car");
    }

    else if(code == 2){
        console.log(color + ' motorbike');
    } else{
        console.log("Invalid code!! enter 1 or 2 for code");
    }
}
vehicleType("black", 1);



//5 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
console.log('QUESTION-5');

function vehicle(color, code, age){
    if(code == 1 ){
        (age > 0) ?  console.log("A " + color + " USED car") :  console.log("A " + color + " NEW car")
    }

    else if(code == 2){
        (age < 0) ?  console.log("A " + color + " USED motorbike") :  console.log("A " + color + " NEW motorbike")
    } else{
        console.log("Invalid code!! enter 1 or 2 for code");
    }
}

vehicle("black", 2, 1);


/* 6
Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
    console.log("yes");
} else {
    console.log("no");
}
*/
console.log('QUESTION-6');

(3 === 3) ?  console.log("yes") :  console.log("no");