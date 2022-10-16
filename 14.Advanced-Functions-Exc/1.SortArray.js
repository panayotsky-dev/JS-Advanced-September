
//v1
function solve(array,argument){
//     if(argument == 'asc'){
//         array.sort((a,b) => a - b)
//         return array
//     }else {
//         array.sort((a,b)=> b-a)
//         return array
//     }
// }

// v2
let type = {
    asc: (a,b) => a - b,
    desc: (a,b) => b - a,
};
array.sort(type[argument])
return array
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))