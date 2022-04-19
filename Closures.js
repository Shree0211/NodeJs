//Function along with the lexical scope forms closoure
function x() {
    var a= 10;  //lexical scope
    function y() {
        console.log(a);
    }
    y();
}
x();