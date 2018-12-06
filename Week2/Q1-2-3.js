//1 Create a function that takes 3 arguments and returns the sum of the these arguments.
console.log("QUESTION-1");

function sum(num1, num2, num3){
    let summation = num1 + num2 + num3;
    console.log(summation);
}

sum(2,2,4);


//2 Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
console.log("QUESTION-2");
function colorCar(color){
    console.log("A " + color + " car")
}

colorCar('red');


//3 Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
console.log("QUESTION-3");
const person = {
    age: 20,
    birthday: "10-Feb-2000",
    height: 180,
    sex: 'male' 
}

function personInfo(obj) {
    console.log(obj);
}

personInfo(person);