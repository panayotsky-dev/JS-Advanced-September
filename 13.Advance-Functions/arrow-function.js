//Arrow

const person = {
    firstName: 'Pesho',
    lastName: 'Peshov',
    introduce(){
        const getFullName = () =>{ // arrow function не запазва собствен контекст в този смисъл в който сме свикнали,а наследява контекста от горната функция!!!
            return this.firstName + ' ' + this.lastName;
        }
        console.log(`Hello, my name is ${getFullName()}`)
    }
}
person.introduce();

// ако е const getFullName = function(){бялляля} имената ще са undefined
// fixва се с arrow function


//Higher-order functions
const sayHello = function (){
    return function (){
        console.log("Hello!")
    }
}
const myFunct = sayHello();
myFunct(); // Hello!

// addEventListener is higher-order function because second parameter is function
 //Predicate  => връща true или false
 let found = array.find(isFound); // isFound => predicate

 function isFound(element){
    return element > 10; // True or false
 }
 console.log(found); // 12

 //Друг предикат
 const array1 = [5,12,8,130,44];

 const found2 = array1.find(element => element > 10);
 console.log(found2) // 12

 //Filter е пак 
 const words = [`spray`,`limit`,`elite`,`exsuberant`,`destruction`,`present`]

 const result = words.filter(word => word.length > 6);
 console.log(result);

 //Pure function
 //return the same result given same parameters
 //execution is independent of the state of the system
 //Math.random IS NOT PURE FUNCTION!!


// impure function
 let number = 1 ;
 const incrementImpure = () => number += 1;
 incrementImpure(); // 2
//pure function
const incrementPURE = n => n + 1;
incrementPURE(1); // 2
//Referential transperency
function add(a,b){return a + b};
function mult(a,b){return a*b};
let x = add(2,mult(3,4))
//mult (3,4)) can be replaced with 12


//Closure
//inner Function State
//-One of the most important features of JavaScript
//-The scope of an inner function includes the scope of the outer function
//-An inner function retains variable being used from
// the outer function scope even after the parent function has returned;
