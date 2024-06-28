// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
    const hq_location = 42;
    const distance_blocks = Math.abs(pickup_location - hq_location);
    return distance_blocks;
}
console.log(distanceFromHqInBlocks);

function distanceFromHqInFeet(pickup_location) {
    const blocks = distanceFromHqInBlocks(pickup_location);
    const feet = blocks * 264; 
        return feet;
}
console.log(distanceFromHqInFeet);

function distanceTravelledInFeet(start, destination) {
    const blocks_travelled = Math.abs(destination - start);
    const feet_travelled = blocks_travelled * 264; 
    return feet_travelled;
}
console.log(distanceTravelledInFeet);


function calculatesFarePrice(start, destination) {
        const feet_traveled = distanceTravelledInFeet(start, destination);
    
        if (feet_traveled <= 400) {
            return 0; // First 400 feet are free
        } else if (feet_traveled > 400 && feet_traveled <= 2000) {
            // then Calculate the fare for distance between 400 and 2000 feet
            const fare = (feet_traveled - 400) * 0.02;
            return fare;
        } else if (feet_traveled > 2000 && feet_traveled < 2500) {
            // Flat fare for distance between 2000 and 2500 feet
            return 25;
        } else if (feet_traveled >= 2500) {
            // Can't travel over 2500 feet then return cannot travel that far
            return 'cannot travel that far';
        }
    }
    console.log(calculatesFarePrice);