// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.
function oddPoss(array){    
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if ( i % 2 == 0){            
        }else{
            res.push(array[i])
        }        
    }
   let arrayCoppy = res.map((x) => x*2)
   let finalRes = [];
   for (let i = arrayCoppy.length-1; i >= 0; i--) {
        finalRes.push(arrayCoppy[i])
   }
console.log(finalRes.join(' '));
}
oddPoss([10, 15, 20, 25]);