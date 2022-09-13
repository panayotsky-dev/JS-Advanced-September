// Write a JS function that takes two numbers and a string as an input. 
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers
//  and the operator you receive as a string.
// The input comes as two numbers 
// and a string argument passed to your function.
// The output should be printed on the console.
function solve(numberOne,numberTwo,operator){
console.log(eval(numberOne + operator + numberTwo))
}
solve(5, 6, '+')
solve(3, 5.5, '*')