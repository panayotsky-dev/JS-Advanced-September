// Write a function that takes three number arguments as input 
// and finds the largest of them. Print the following text on the console: 
//  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.
function solve(number1,number2,number3){
let max = Math.max(number1,number2,number3);
console.log(`The largest number is ${max}.`)
}
solve(5, -3, 16)