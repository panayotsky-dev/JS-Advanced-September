// Write a function that prints a number between 1 and 7 
// when a day of the week 
// is passed to it as a string and an error message
//  if the string is not recognized.
// The input comes as a single-string argument.
// The output should be returned as a result.
function solve(input){
    
let daysOfWeek =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for( let i=0; i<daysOfWeek.length; i++){
    if(input == daysOfWeek[i]){        
        console.log(i);
    }
}
if ( input == `Invalid` ){
    console.log(`error`);
}
}


solve([`Monday`]);
solve([`Friday`]);
solve([`Invalid`]);