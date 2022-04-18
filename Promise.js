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
     
  promise
  
      .then(function () {
          console.log('Successfull');
      })
      .catch(function () {
          console.log('Some error has occurred');
      });