// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.
function solve(n, k) {
    const numbers = [1];
  
    generateNumber(numbers, n, k);
  
    return numbers;
  
    function generateNumber(numbers, n, k) {
      if (numbers.length < n) {
        const sum = numbers
          .slice(-k)
          .reduce((a, b) => a + b, 0);
  
        numbers.push(sum);
  
        generateNumber(numbers, n, k);
      }
    }
  }
  
  console.log(solve(6, 3));
  console.log(solve(8, 2));