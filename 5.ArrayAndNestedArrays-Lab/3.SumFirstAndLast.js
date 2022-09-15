// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.
function solve(array){
    let arrayLength = array.length;
    console.log(Number(array[0]) + Number(array[arrayLength-1]));

}
solve(['20', '30', '40'])