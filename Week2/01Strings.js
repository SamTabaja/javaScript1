let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

let myReadableString = myString.replace(/,/g, " ");

console.log(myReadableString);