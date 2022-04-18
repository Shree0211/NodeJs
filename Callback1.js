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