//Error handling
//a function failed to do what its name suggests SHOULD:
//return special value(indefinedfalse/-1);
//throw an exceptio/error
//Exceptions are the object-oriented way for errors


//Error handling return a special value example

let str = "Hello,SoftUni";
console.log(str.indexOf("Sofia")) // -1
// Special case returns a special value to indicate "not found"

//Types of Errors
//-There are three types of errors in programming:
// -Syntax Errors - during parsing
// -Runtime Errors - occur during execution такива които излизат по време на exectuion
    //function runtimeError(callback){
    // callback("Pesho");}
    // Uncaught TypeError: callback is not a function;
    //Second example
    //function something2(obj){
        //*console.log(obj.name);
        //}
        //something2(); и като не подадем object няма от къде да вземе стойност
        //Cannot read properties of undefined(reading 'name');
            //Това са две много срещани грешки в JS !
// -Logical Errors - occur when a mistake has been made in the logic of the script
// and the expected result is incorrect
//Цялостно работи,но не работи правилно- логическа грешка..Тези грешки са трудни за намиране,за разлика от другите два типа
// с DEBUGGING се намират логически грешки.

//ERROR HANDLING - Exceptions (errors);
// - Exceptions - a function is unable to do its work(fatal error);
//let arr = new Array(-1); // Uncaught RangeError
//let bigArr = new Array(9999999999999); // RangeError
//let index = undefined.indexOf("hi");//TypeError;
//console.log(George);//Uncaught ReferenceError;
//console.log('hi'); //Uncaught TypeError;