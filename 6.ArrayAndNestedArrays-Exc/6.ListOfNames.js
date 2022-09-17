// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
function solve(array){
let result = array.sort((a,b)=>a .localeCompare(b));
for(let i = 0; i < result.length; i++){
    console.log(`${i+1}.${result[i]}`);
}
}
// let result = array.sort((a,b)=>a .localeCompare(b));
// .forEach((x,i)=>console.log(`${i+1}.${x}`));
solve(["John", "Bob", "Christina", "Ema"])