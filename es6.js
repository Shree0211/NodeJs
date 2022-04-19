//let and const
function check(){
    let a=10;
    if(true){
        let a = 20; 
        console.log(a);
    }
    console.log(a);
}
check();

function checks(){
    var a1=10;
    if(true){
        var a1 = 20; 
        console.log(a1);
    }
    console.log(a1);
}
checks();

const name = 'shree';
console.log(name);
//name = 'shreee'