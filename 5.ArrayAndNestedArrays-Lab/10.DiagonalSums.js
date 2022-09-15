// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
function solve (matrix){
let resultLeft = 0;
let resultRight =0;
let secondIndex = matrix[0].length-1
for(let i = 0; i < matrix.length; i++){
    resultLeft += matrix[i][i];
    resultRight += matrix[i][secondIndex]
    secondIndex--;
} 
   

console.log(`${resultLeft} ${resultRight}`);
// console.log(`${resultLeft} ${resultRight}`);
}
solve([[20, 40],
    [10, 60]]
   )