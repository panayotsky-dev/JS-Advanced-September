function SubSum (numbers,start,end){
    if(!Array.isArray(numbers)){  //IsArray е най-правилния начин да се провери дали е array/хакерски
        return NaN;
    }          

    let startIndex = Math.max(start,0);
    let endIndex = Math.min(end, numbers.length-1);

    let subNumbers = numbers.slice(startIndex,endIndex+1)
    let sum = subNumbers.reduce((a,x) => a + Number(x),0);
    

    return sum;


}
// second solution
// function solve(array,startIndex,endIndex){
//     if(Array.isArray(array) == false){
//         return Nan;
//     }
//     if(startIndex < 0){ startIndex = 0;}
//     if(endIndex > array.length - 1){
//         endIndex = array.length -1;
//     }
//     return array
//     .slice(startIndex,endIndex+1)
//     .map(Number)
//     .reduce((acc,x) => acc + x,0);
// }

console.log(SubSum([10, 20, 30, 40, 50, 60], 3, 300));