//Simple Promise example
var promise = new Promise(function(resolve, reject) {
    const x = "HelloWorld";
    const y = "HelloWorld"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
 // promise
  
      .then(function () {
          console.log('Successfull');
      })
      .catch(function () {
          console.log('Some error has occurred');
      });

let is_shop_open = false;
function order(time, work) {
    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time);
        }

        else {
            reject(console.log("Shop is called"))
        }
    });
};
order(2000,()=>console.log("Order received") )

.then(() => {
    return order(1000, () => console.log("Production has started..."))
} )

.then(() => {
    return order(1000, () => console.log("Item preparing..."))
} )

.then(() => {
    return order(1000, () => console.log("Production completed."))
} )

.catch(() => {
    console.log("Customer left");
})

.finally(() => {
    console.log("Day ended, shop is closed");
}
)