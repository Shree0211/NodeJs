//Simply calling 1 function inside another
// function one(call_two)
// {
//     console.log("Step 1 completed. Please call Step 2");
//     call_two();
// }
// function two()
// {
//     console.log("Step 2");  
// }
// one(two);

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
