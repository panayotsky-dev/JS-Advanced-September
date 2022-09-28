function solve (arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    // let smallNum = 0;
    // let biggestNum = 0;
  //   arr.forEach(element => {
  //     while(arr.length > 0) {
  //     smallNum = arr.shift();
  //     result.push(smallNum);
  //     biggestNum = arr.pop();
  //     result.push(biggestNum);
  //   }
  // });
   
  while(sorted.length > 0) {
      let smallNum = sorted.shift();
      result.push(smallNum);
      let bigNUm = sorted.pop();
      result.push(bigNUm)
    }
    return result
  }
  console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))