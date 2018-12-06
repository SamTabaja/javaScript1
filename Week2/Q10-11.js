
let carList = ["motorbike", "caravan", "bike", "car", "van"];

function vehicle(){
let advertisement = "Amazing Joe's Garage, we service ";    
for (i = 0; i < carList.length; i++) {
     if (i == carList.length - 1) {
        advertisement += "and " + carList[i] + "s.";
        } else {
            advertisement += carList[i] + "s, ";
            }
    }
    return advertisement;
}
console.log(vehicle());

//11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
carList.push("truck");
console.log(vehicle());

 
