// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.
function timeToWalk(steps, stepInM, speedKmH) {
    const meters = steps * stepInM;
    const speedMS = speedKmH / 3.6;
    const rest = Math.floor(meters / 500) * 60;
    const time = meters / speedMS + rest;
  
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, 0);
  
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, 0);
  
    const seconds = Math.round(time - minutes * 60)
      .toString()
      .padStart(2, 0);
  
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
timeToWalk(4000, 0.60, 5)