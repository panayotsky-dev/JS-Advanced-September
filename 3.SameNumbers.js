// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.
function solve(input){
let asd = input.toString();
let same = true;
let count = 0;
for (let i = 0; i < asd.length; i++) {
    count += Number(asd[i]);
    if(asd[0] != asd[i]){
        same = false;
    }
}
console.log(same);
console.log(count);
}
solve([2222222])