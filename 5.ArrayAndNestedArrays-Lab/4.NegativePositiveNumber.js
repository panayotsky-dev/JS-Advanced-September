// Write a JS function that processes the elements in an array one by one and produces a new array. If the current element is a negative number you must add it to the front of the array (as the first element of the array). Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.
function solve(array){
    // arrayCoppy = array.map((x) => x);
    // arrayCoppy.sort((a,b) => a -b);
    //     console.log(arrayCoppy)
    let possitive = [];
    let negative = [];
    let result = [];
    array.forEach(element => {
        if (element < 0){
            negative.unshift(element);
        }else{
            possitive.push(element);
        }
    });
   console.log(negative.join('\n'));
   console.log(possitive.join('\n'));
}
solve([7, -2, 8, 9])
solve([3, -2, 0, -1])