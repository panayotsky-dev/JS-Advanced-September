// Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. The result of the function should be a new array, containing a section of the original array, starting at the first flavor parameter, and ending at (and including) the second flavor parameter.
// The input comes as three arguments:
// •	An array of strings, representing pie flavors
// •	Two more strings, representing the start and end of the section, respectively
// The output is the return value of the function and should be an array of strings.
function pieOfCake(array,startingPoint,FinishPoint){
// let indexS = array.indexOf(startingPoint);
// let indexF = array.indexOf(FinishPoint);
// let result = array.splice(indexS,indexF);
// console.log(result);
let indexS = array.indexOf(startingPoint);
let indexF = array.indexOf(FinishPoint);
return array.slice(indexS,indexF+1);
}
pieOfCake(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')
pieOfCake(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
