// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`
function previousDay(year, month, day) {
let previous = new Date (year, month,day-1);
if (day == 1){
    previous = new Date (year, month -1, day-1)
    console.log(`${previous.getFullYear()}-${previous.getMonth()+1}-${previous.getDate()}`);
}else{
console.log(`${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`);
}}

previousDay(2016, 9, 30)
previousDay(2016,10,1)