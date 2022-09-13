// Write a function that takes two positive numbers as input
//  and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.
function solve(a,b){
    let gcd = 0;
for ( let i = 1; i<= a && i<=b;i++){
    if (a%i == 0 && b % i ==0){
        gcd = i;
    }

}
console.log(gcd)
}
solve(15,5)