// //Simple Async/Await example
// const one = async() => {
//     var y = await "Hello World";
//     console.log(y);
// }
  
// console.log(1);
// one();
// console.log(2);

//use of await keyword 
let is_shop_open = true;

let modification = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Modification held"));
        },3000);
    });
};

async function order()
{
    console.log("Order received");
    console.log("Production started");
    console.log("Item preparing");

    await modification();
    console.log("Order completed");
    console.log("Waiting for new order");
}

order();

console.log("-------NEW OFFERS--------");
