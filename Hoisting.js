getName();
console.log(x); //undefined because js allocate memory before execution once its initalized
console.log(y); //not defined because no initialization
console.log(getName); //prints whole function
getName1(); //it will behave like variable

var x = 20;
//var y = 5;

function getName(){
    console.log("Hello World");
}

var getName1 = () => {
    console.log("Hello");
}

