// Write a JS function that takes three string arguments as an input.
//  Calculate the sum of the length of the strings 
//  and the average length of
//  the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

// function solve(array){
// let sum = 0;
// array.forEach(element => {
//     sum +=element.length
// });
// let average = array.length;
// console.log(sum)
// console.log(Math.floor(sum/average))
// }
// solve(['chocolate', 'ice cream', 'cake'])
// solve(['pasta', '5', '22.3'])
function solve(one,two,tree){
    let sum = one.length + two.length + tree.length;
    console.log(sum)
    console.log(Math.floor(sum/3))
}
solve('chocolate', 'ice cream', 'cake')
solve('pasta', '5', '22.3')