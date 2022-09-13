// Write a JS function that takes two numbers n and
//  m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that
//  need to be parsed as numbers.
// The output should return the sum.
function solve(one,two){
let result = 0;
let numberOne = Number(one);
let numberTwo = Number(two);
for (let i = numberOne; i<= numberTwo; i++){
    result +=i;
}
console.log(result);
}
solve('1', '5' )