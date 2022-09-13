// Write a program that performs different operations on an array of elements.
//  Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.
function solve(array){
    let sum = 0;
    let inverse = 0;
    let conct = [...array];
    let asd = ``;   
        array.forEach(element => {
            sum+= element;
            inverse += 1/element;
        })  
    conct.forEach(element =>{
    asd += element;
    });
console.log(sum);
console.log(inverse);
console.log(asd);
}
solve([1,2,3]);
solve([2, 4, 8, 16])