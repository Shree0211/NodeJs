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

const name = 'Shree';
const surname = 'Vyas';
const state = 'Gujarat'
console.log(name);
//name = 'shreee'

//Template literals
let showvalue = `My full name is ${name} ${surname}. I am from ${state}`;
console.log(showvalue);

//Default Arguments

function CandidateAge(age=18){
    return age;
}
console.log(CandidateAge()); //default value is set to 18