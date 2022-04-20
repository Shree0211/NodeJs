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

//Arrow function
 let sum = (a,b) => {
     return a+b;
 }
console.log(sum(10,20));

//MultiLine Strings
let display = `Hello World!!! How you doing?
               Hope you are good.`

console.log(display);

//Class

class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() {       
      console.log(`My Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('Shree', 'Vyas');
 obj.getName();

 //Promise

 var asyncCall =  new Promise((resolve, reject) => {
    // do something
    resolve();
 }).then(()=> {   
    console.log('Hello..');
 })

 //Destructing objects and arrays

 const Info = {
     firstName: 'Shree',
     lastName: 'Vyas',
     state: 'Gujarat',
     country: 'India'
 }
const {firstName: fn, lastName: ln} = Info;
console.log(`${fn} ${ln}`);

//object literals 
function address(city,state){
    const newaddress = (city,state)
    console.log(newaddress);
}
address('rajkot','gujarat');
