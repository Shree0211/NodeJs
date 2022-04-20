const fruits = ['Mango','Papaya','Banana']
const vegetable = ['Potato','Tomato']

fruits.push('Orange'); //adds at the last 
console.log(fruits);
fruits.pop(); //removes last element from the array
console.log(fruits);

vegetable.unshift('Peas'); //adds in the first
console.log(vegetable);
vegetable.shift();// removes first element from the array
console.log(vegetable);

var a = fruits.slice(1);
console.log(a);

vegetable.splice(1,2,'Kiwi');

var food = fruits.concat(vegetable) //concate 2 strings
console.log(food);
console.log(vegetable);

var d=food.join("|") //concate and prints in line with any specific symbol
console.log(d);

fruits.toString(); //converts to string
console.log(fruits);