// This script calculates and prints demerit points based on car speed.
// You can change this value to test different speeds
const speed = 80;

const speedLimit = 70;
let points = 0;

// Check if the speed is within the limit
if (speed < speedLimit) {
  console.log("Ok");
} else {
  // Calculate points for every 5 km/h over the limit
  points = Math.floor((speed - speedLimit) / 5);
  
  // Check if the license is suspended
  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${points}`);
  }
}

// Example usage:
checkSpeed(80); // Should print "Points: 2"
checkSpeed(65); // Should print "Ok"
checkSpeed(135); // Should print "License suspended"