//7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more

let carList = ["motorbike", "caravan", "bike", "car", "van"];

//8 How do you get the third element from that list?
console.log(carList[2]);

//9 Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, code, age){
    for(i = 0; i<carList.length; i++)
    if(code == i ){
        (age > 0) ?  console.log("A " + color + " USED " + carList[i]) :  console.log("A " + color + " NEW " + carList[i])
    }
}

vehicle("Green", 2, 0);


// 10 Use the list of vehicles to write an advertisement. So that it prints something like: 
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)


