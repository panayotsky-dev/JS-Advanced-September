
//Global context
function random(){
    console.log(this);// in browser will be window
    return Math.random();
}
random(); // global invocation


let math = {
    random: random
};
math.random() // method invocation

//Object context
const obj = {
    name:'Peter',
    outer(){
        console.log(this);// Object {name: 'Peter}
        function inner(){console.log(this)};
        inner();
    }
}
obj.outer();// Window

//--- //

let obj2 = {
    name:'Peter',
    greed(){
        random(); // global invocation
        console.log('Hello! My name is ${this.name}')
    }
}
obj2.greed(); //Hello! My name is Peter;


let greed = obj2.greed();// copy function by reference
greed();// global invocation => Hello! My name is undefined

//DOM Element - Must execute in browser
    // element.addEventListener('click', function(){
    //  console.log(this)
    // });   // сочи към  elementa


//Nested functions
function a(){
    function b(){
        function c(){
            function d(){
                console.log(this) // global
            }
        }
    }
}    
a()

// global => function()
// object => obj.function()
// DOM => element.function()