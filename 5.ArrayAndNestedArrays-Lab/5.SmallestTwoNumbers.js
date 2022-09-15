// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function solve(array){
     // arrayCoppy = array.map((x) => x);
     //let result = [];
     //let arrayCoppy.sort((a,b)=> a-b);
     //result.push(arrayCoppy[0],arrayCoppy[1]);
     //console.log(result.join(" "));
    let result = [];
    array.sort((a,b) => a -b);    
    result.push(array[0],array[1]);
    console.log(result.join(" "))
}
solve([30, 15, 50, 5])