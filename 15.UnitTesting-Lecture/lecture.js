//*Error handling
//?a function failed to do what its name suggests SHOULD:
//?return special value(indefinedfalse/-1);
//?throw an exceptio/error
//*Exceptions are the object-oriented way for errors


//Error handling return a special value example

let str = "Hello,SoftUni";
console.log(str.indexOf("Sofia")) // -1
// Special case returns a special value to indicate "not found"

//*Types of Errors
//?-There are three types of errors in programming:
//? -Syntax Errors - during parsing
//? -Runtime Errors - occur during execution такива които излизат по време на exectuion
    //function runtimeError(callback){
    // callback("Pesho");}
    // Uncaught TypeError: callback is not a function;
    //Second example
    //function something2(obj){
        //console.log(obj.name);
        //}
        //something2(); и като не подадем object няма от къде да вземе стойност
        //Cannot read properties of undefined(reading 'name');
            //*Това са две много срещани грешки в JS !
// ?-Logical Errors - occur when a mistake has been made in the logic of the script
// ?and the expected result is incorrect
//*Цялостно работи,но не работи правилно- логическа грешка..Тези грешки са трудни за намиране,за разлика от другите два типа
// с DEBUGGING се намират логически грешки.

//*ERROR HANDLING - Exceptions (errors);
// ?- Exceptions - a function is unable to do its work(fatal error);
//let arr = new Array(-1); // Uncaught RangeError
//let bigArr = new Array(9999999999999); // RangeError
//let index = undefined.indexOf("hi");//TypeError;
//console.log(George);//Uncaught ReferenceError;
//console.log('hi'); //Uncaught TypeError;

//* How to throw errors;
//function getNumber(){
// let randomNumber = Math.random();
// if (randomNumber < 0.5){
    // throw new Error('Your number is too low');
    // or 
    // throw 'Your number is too low';
    // or
    // throw {
        //message: 'Your number is too low',
        //type:'Some_error_TYPE'
        //};
    //}
// return Math.floor(randomNumber* 100);
//}

//let number = getNumber();
//console.log(number);


//* Throwing errors(Exceptions)
//* The trow statement lets you create custom erros;
 //?- General Error - throw new Error("invalid state");
 //?- range Error - throw new RangeError("Invalid Index");
 //? -Type Error - throw new TypeError("String expected");
 //? -Reference Error - throw new ReferenceError("Missing age");
 // throw new Error('Required');
 // generates an error object with the message



 //function app (){
    // let number;
// try { //?В try трябва да седят неща които се очаква да гръмнат..Не е окей да е цялата задача... може да са повече редове ппц.
//  number = getNumber(); 
// 
// } catch (error) {
    // }
    // console.log(number);
    // }


     //function app (){
    
// try { 
//  let number = getNumber(); 
// console.log(number);
// } catch (error) {
    // }finally {
 // console.log('always executes last');}
    // }

    //* err.name   err.stack err.message 

    //* try - опитай да направиш това
    //* catch - ако не стане,направи това

    //* finally {} - finally ще се изпълни независимо дали грешката е минала или не - ще се изпълни на края.Съществуването на finally е заради async(асинхронно програмиране) и се изполва предимно при него.
    
    
    //*factory function -функция която генерира обекти


    //*Modules- начин по който разделяме/организираме кода на различни файлове.Модулите са по-голяма структорна единица от функцията.Функцията е наименовано парче код,а модулите наименовано парче от application-а което съдържа в себе си фунцкии и код.
     //Definition,Import,Export
     //?-A set of functions(не е задължително да са функции) to be included in application
     //?-Group related behavior
     //?-Resolve naming collisions
        // http.get(url) and students.get()
    //?- Expose only public behavior
     //? -They do not populate the global scope with unnecessary objects.
    //!Затваряйки в модула решаваме проблема на JS ,че всичко е публично
    //!Което не сме expose-нали през модула то остава прайвет за модула и не може да бъде използвано извън него
    // const loading = {
        // show(){},
        // hide(){},};
    
//*Node js MODULES
//!Има два вида модули в JS -> Node.js/commonJS(Node.js module system) и es6Modules(default js system)
//? -require() is uded to import modules
// const http = require('http'); //FOR NPM packages

// const myModule = require('./myModule.js'); //for internal modules
//? -Internal modules need to be exporeted before being required
//? - In Node.js each file has its own scope

//?  Whatever value has module.exports will be the value when using require
//const myModule = () => {...};
//module.exports = myModule;

//? To export more than one function,the value of module.exports will be an object
//module.exports = {
    //toCamelCase: convertToCamelCase,
    //toLowerCase:convertToLowerCase};



//*Unit testing
//?Definition,Structure,Examples,Framework
//? -Testing enables the following:
    //?-Easier maintenance of the code base
        //?-Bugs are found ASAP
    //?-Faster development
        //?-The so called"Test-driven development"
        //?-Test before code
    //?-Automated way to find code wrongness
        
    //*Unit Tests Structure
        //*- THE AAA Pattern : Arrange,Act,Assert
        //?Arange all necessary preconditions and inputs
        //let nums = [2,15,-2,4];
        //?Act on the object or method under test
        //sortNums(nums);
        //?Assert that the obtained results are what we expect
        //if(JSON.stringify(nums) === "[-2,2,4,15]"{
            //console.log("They are equal!");}


            //*Unit testings Frameworks

             //?JS Unit testing:
             //* Mocha,QUnit,Unit.js,Jasmine,Jest(all in one) 

             //?-Assertion frameworks(perform checks)
             //*Chai,Assert.js,Should.js

             //?-Mocking frameworks(mocks and stubs)
             //*Sinon,JMock,Mockito,Moq


             // let assert = require("chai").assert
             //describe("pow",function(){
                //it("2raised to power 3 is 8",function(){
             //assert.equal(pow(2,3),8);
             //});});