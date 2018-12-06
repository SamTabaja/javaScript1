//Question-5 -- Rounding
var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);

var highest;
if (a > z) {
    highest = a;
} else {
    highest = z;
}
console.log("The highest number is " + highest);