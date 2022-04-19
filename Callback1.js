//Simply calling 1 function inside another
function one(call_two)
{
    console.log("Step 1 completed. Please call Step 2");
    call_two();
}
function two()
{
    console.log("Step 2");  
}
one(two);

//Addition of 2 numbers

function Sum(num1,num2,add)
{
    let addition = num1+num2;
    console.log("Addition of 2 numbers is :", addition);
    add(10,20);
}

const Sum1 = (num1,num2) =>
{
    console.log("Addition of Sum1 is :", num1+num2);
}
Sum(30,40,Sum1);

console.log();


//Using set timer function

let order =(call_production) =>
{
    setTimeout(()=>{
        console.log("Order placed, please call production...");
        call_production();
    },2000)
    
}
let production=() => 
{
    setTimeout(()=>{
        console.log("Production started...");

        setTimeout(()=>{
            console.log("Item preparing...");

            setTimeout(()=>{
                console.log("Production completed.");
            
            },2000);  
        },3000);        
    },5000);
}
order(production);