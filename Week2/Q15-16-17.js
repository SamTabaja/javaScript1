/* 15
Write some code to test two arrays for equality using == and ===. Test the following:
    let x = [1,2,3];
    let y = [1,2,3];
    let z = y
*/
console.log("QUESTION - 15 starts here");

let x = [1,2,3];
let y = [1,2,3];
let z = y

console.log((x == y));
console.log((x === y));
console.log((z == x));
console.log((z === x));
console.log((z == y));
console.log((z === y));


console.log("QUESTION - 16 starts here");

/* 16
Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter?
*/

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = "a";
console.log("changing o2 will change o3");

console.log(o1);
console.log(o2);
console.log(o3);

o3.foo = "b"
console.log(" changing o3 will change o2");

console.log(o1);
console.log(o2);
console.log(o3);

o1.foo ="x"
console.log("changing o1 will never change neither o2 or o3");

console.log(o1);
console.log(o2);
console.log(o3);



/*
What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.
*/

console.log("QUESTION - 17 starts here");
let bar = 42;
console.log(typeof typeof bar);
