// Write a function that prints a rectangle made of stars 
// with variable size, depending on an input parameter.
//  If there is no parameter specified,
//   the rectangle should always be of size 5.
//    Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console
// , forming a rectangle of variable size.
function solve(number){
    let horizontal = `*`;
    
for(let i = 0; i < number-1; i++){
 horizontal += ` *`; 
}
for (let z = 0; z < number; z++){
    console.log(`${horizontal}`)
}

}
solve(1);
// solve(2);
// solve(5);