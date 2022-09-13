// Write a function that takes a single argument as an input.
// Check the type of input argument.
// If it is a number, assume it is the radius of a circle 
// and calculate the circle area.
//  Print the area rounded to two decimal places.
// If the argument type is NOT a number,
//  print the following text on the console: 
// `We can not calculate the circle area, because we receive a {type of argument}.`
// The input comes as a single argument passed to your function.
// The output should be printed on the console.
function solve(input){
    let result = 0;
if(typeof input == 'number'){
 result = Math.pow(input, 2)*Math.PI;
    console.log(result.toFixed(2));
}else{
    console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)

}
}
solve(5);
solve('name')