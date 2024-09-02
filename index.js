/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = { 
  value: 10000,
  measurement: "km/h"
}; // velocity (km/h)

const acceleration = {
  value: 3,
  measurement: "m/s^2"
}; // acceleration (m/s^2)

const time = {
  value: 3600,
  measurement: "seconds"
}; // seconds (1 hour)

const distance = {
  value: 0,
  measurement: "kilometers"
}; // distance (km)

const fuel = {
  value: 5000,
  measurement: "kilograms"
}; // remaining fuel (kg)

const fbr = {
  value: 0.5,
  measurement: "kg/s"
}; // fuel burn rate (kg/s)


const distanceCovered = d + (vel*time) //calcultes new distance
const remainingFuel = fbr*time //calculates remaining fuel
const acceleratedVelocity = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocity, acceleration, time) => { 
  return velocity + (acceleration*time)
}

console.log(`Corrected New Velocity: ${acceleratedVelocity} km/h`);
console.log(`Corrected New Distance: ${distanceCovered} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






