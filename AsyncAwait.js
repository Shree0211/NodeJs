//Simple Async/Await example
const one = async() => {
    var y = await "Hello World";
    console.log(y);
}
  
console.log(1);
one();
console.log(2);