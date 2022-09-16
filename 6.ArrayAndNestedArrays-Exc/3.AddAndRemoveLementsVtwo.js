// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".
function solve(array){
    let result = [];
    let commands = {
        add:(num) => {result.push(num)},
        remove: (num) => {result.pop()}
    }
    for(let i = 0; i < array.length; i++){
        commands[array[i]](i+1);
    }
    if (result.length !== 0) {
        return result.join('\n')
    } else { return result= `Empty` }
}
console.log(solve(['add', 
'add', 
'add', 
'add']
))

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
))
console.log(solve(['remove', 
'remove', 
'remove']
))