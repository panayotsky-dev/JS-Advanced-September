// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.
function solve(array){
let sortArr = array.sort((a,b)=>{
    if (a.length !== b.length){
        return a.length - b.length;
    }else{
        return a.localeCompare(b);
    }
});
console.log(sortArr.join("\n"))
}
solve(['alpha', 
'beta', 
'gamma']
)
// return array.sort((a,b)=>{
//     a.length-b.length|| a.localeCompare(b);
// }).join("\n")