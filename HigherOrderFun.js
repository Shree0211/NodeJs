 const questions = (name) => {
     if(name === "Raj"){
         return function(topic){
             console.log(`Hello ${name}. What is ${topic}?.Please explain`);
         }
     }
     if(name === "Ravi"){
        return function(topic){
            console.log(`Hello ${name}. What is ${topic}?.Please explain`);
        }
    }
    if(name === "Rahul"){
        return function(topic){
            console.log(`Hello ${name}. What is ${topic}?.Please explain`);
        }
    }
    else{
        return function(){
            console.log("Welcome");
        }
    }
 }

 //questions("Raj")("Frontend");
 questions("Ravi")("Backend");
 questions("Rahul")("Fullstack");

 const can1 = questions("Raj");
 can1("UI");
 can1("UX");
 can1("JavaScript");
