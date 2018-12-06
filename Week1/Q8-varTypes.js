//Question-8 -- Checking types of two variables
var str = "Hello World"
var str2 = "OK"
var num = 10;
var check = true;
var arr = ["array"];
console.log("The value of str is: " + str + "\n" +
            "The value of num is: " + num + "\n" +
            "The value of check is: " + check +"\n" + 
            "The value of arr is: " + arr + "\n");

console.log("The type of str is string \n"+
            "The type of num is number \n"+
            "The type of check is boolean \n"+ 
            "The type of arr is object \n");

console.log("The type of str is "+ typeof(str) + "\n" +
            "The type of num is "+ typeof(num) + "\n" +
            "The type of check is "+ typeof(check) + "\n" +
            "The type of arr is "+ typeof(arr));



var types = [typeof(str), typeof(str2), typeof(num), typeof(check), typeof(arr)];
console.log(types);

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(str) ){
        console.log("The type of " + str + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + str + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(str2) ){
        console.log("The type of " + str2 + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + str2 + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(num) ){
        console.log("The type of " + num + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + num + " is not  " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(check) ){
        console.log("The type of " + check + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + check + " is not " + types[i])   
    }
}

for(i=0; i<types.length+1; i++){
    if (types[i] == typeof(arr) ){
        console.log("The type of " + arr + " is " + types[i])
        i++;
    } else{
        console.log("The type of " + arr + " is not  " + types[i])   
    }
}




