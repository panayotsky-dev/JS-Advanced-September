// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.
function speeding(currentSpeed, location) {
    const motorwaySpeed = 130;
    const citySpeed = 50;
    const interstateSpeed = 90;
    const residentalSpeed = 20; 
        let difference = 0;
        let speeding = 20;
        let excessiveSpeed = 40;

    switch (location) {
        case 'city':
            if (currentSpeed > citySpeed) {
                difference = Math.abs(currentSpeed - citySpeed);
                if (difference <= speeding) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - speeding`)
                } else if (difference > speeding && difference <= excessiveSpeed) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - excessive speeding`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - reckless driving`)
                }

            } else if (currentSpeed <= citySpeed) {
                console.log(`Driving ${currentSpeed} km/h in a ${citySpeed} zone`);
            }
            break;
        case 'residential':
            if (currentSpeed > residentalSpeed) {
                difference = Math.abs(currentSpeed - residentalSpeed);
                if (difference <= speeding) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentalSpeed} - speeding`)
                } else if (difference > speeding && difference <= excessiveSpeed) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentalSpeed} - excessive speeding`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentalSpeed} - reckless driving`)
                }

            } else if (currentSpeed <= residentalSpeed) {
                console.log(`Driving ${currentSpeed} km/h in a ${residentalSpeed} zone`);
            }
            break;
        case 'interstate':
            if (currentSpeed > interstateSpeed) {
                difference = Math.abs(currentSpeed - interstateSpeed);
                if (difference <= speeding) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - speeding`)
                } else if (difference > speeding && difference <= excessiveSpeed) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - excessive speeding`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - reckless driving`)
                }

            } else if (currentSpeed <= interstateSpeed) {
                console.log(`Driving ${currentSpeed} km/h in a ${interstateSpeed} zone`);
            }
            break;
        case 'motorway':
            if (currentSpeed > motorwaySpeed) {
                difference = Math.abs(currentSpeed - motorwaySpeed);
                if (difference <= speeding) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - speeding`)
                } else if (difference > speeding && difference <= excessiveSpeed) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - excessive speeding`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - reckless driving`)
                }

            } else if (currentSpeed <= motorwaySpeed) {
                console.log(`Driving ${currentSpeed} km/h in a ${motorwaySpeed} zone`);
            }
            break;
        default: break;

    }
}
speeding(40,'city');
speeding(21, 'residential')
speeding(120, 'interstate')
speeding(200, 'motorway')
speeding(0,'residential')
