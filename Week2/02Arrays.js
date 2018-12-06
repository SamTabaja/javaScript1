let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
//2.1
favoriteAnimals.push('turtle');
//2.2
console.log(favoriteAnimals);
//2.3
favoriteAnimals.splice(1, 0, 'meerkat');
//2.4
console.log("the new value of the array will be as follows:\n 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'")
//2.5
console.log(favoriteAnimals);
//2.6
let arrayLength = favoriteAnimals.length;
console.log('the array lenght is ' + arrayLength);
//2.7
favoriteAnimals.splice(3,1);
//2.8
console.log(favoriteAnimals);
//2.9
jimFavoriteAnimals = favoriteAnimals.indexOf('meerkat');
//2.10
console.log("The item you are looking for is at index number " +  jimFavoriteAnimals);