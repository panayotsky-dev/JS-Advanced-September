//Closure


function counterBuilder(innitialValue){
let counter = 0;
return function(){
    counter++;
    console.log(counter);
}
}

let counter = counterBuilder(); // higher-order function
counter(); // impear Function 