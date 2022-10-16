
//v1 simple
function solve(array,argument){
//     if(argument == 'asc'){
//         array.sort((a,b) => a - b)
//         return array
//     }else {
//         array.sort((a,b)=> b-a)
//         return array
//     }
// }

// v2 object
let type = {
    asc: (a,b) => a - b,
    desc: (a,b) => b - a,
};
array.sort(type[argument])
return array
    
// v3 one line version
// return argument === 'asc' ? array.sort((a,b) => a-b) : array.sort((a,b) => b -a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))
