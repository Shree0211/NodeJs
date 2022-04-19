// //Function along with the lexical scope forms closoure
function x() {
    var a= 10;  //lexical scope
    function y() {
        console.log(a);
    }
    y();
}
x();

//Calling after multiple lines of code
function x(){
    var b = 20;
    function y(){
        console.log(b);
    }
    return y;
}
var z = x();
console.log(z);
//......
z();