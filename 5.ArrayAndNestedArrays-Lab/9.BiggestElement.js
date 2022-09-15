// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.
function solve(input){
    let sortedArray = [];
    
for (let i = 0; i < input.length; i++) {
    input[i].sort((a,b) => b -a);
    sortedArray.push(input[i][0]);
}
sortedArray.sort((a,b) => b -a);
console.log(sortedArray[0]);
}
solve([[20, 50, 10],
    [8, 33, 145]]
   )