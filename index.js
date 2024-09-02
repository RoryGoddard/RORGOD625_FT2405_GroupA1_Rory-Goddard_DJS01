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

const fuelBurnRate = {
  value: 0.5,
  measurement: "kg/s"
}; // fuel burn rate (kg/s)


const distanceCovered = calculateDistanceCovered(distance, velocity, time) //calcultes new distance
const remainingFuel = calculateRemainingFuel(fuelBurnRate, time) //calculates remaining fuel
const acceleratedVelocity = calculateNewVelocity(acc, vel, time) //calculates new velocity based on acceleration

// Returns distance covered in kilometers
function calculateDistanceCovered(distance, velocity, time) {
  let calculatedTimeForDistanceCoveredFunction = 0

  if (!distance) throw new Error("Distance object is required")
  if (!velocity) throw new Error("Velocity object is required")
  if (!time) throw new Error("Time object is required")

  if (!distance.measurement === "kilometers") throw new Error("Please provide a distance object calculated in kilometers")

  if (!velocity.measurement === "km/h") throw new Error("Please provide a velocity object calculated in kilometers")

  if (time.measurement === "seconds") {
    calculatedTimeForDistanceCoveredFunction = time.value / 3600
  } else if (time.measurement === "minutes") {
      calculatedTimeForDistanceCoveredFunction = time.value / 60
  } else if (time.measurement === "hours") {
      calculatedTimeForDistanceCoveredFunction = time.value
  } else throw new Error("Please provide a time object measured in seconds, minutes, or hours")


  return distance.value + (velocity.value * calculatedTimeForDistanceCoveredFunction)
}

function calculateRemainingFuel(fuelBurnRate, time) {
  let calculatedTimeForFuelBurnRateFunction = 0
  if (!fuelBurnRate) throw new Error("fuelBurnRate object is required")
  if (!time) throw new Error("time object is required")

  if (time.measurement === "seconds") {
    calculatedTimeForFuelBurnRateFunction = time.value
  } else if (time.measurement === "minutes") {
    calculatedTimeForFuelBurnRateFunction = time.value * 60
  } else if (time.measurement === "hours") {
    calculatedTimeForFuelBurnRateFunction = time.value * 3600
  } else throw new Error("Please provide a time object measured in seconds, minutes, or hours")

  if (!fuelBurnRate.measurement === "kg/s") throw new Error("Please provide a fuel burn rate in kg/s")
  
  return fuelBurnRate.value * calculatedTimeForFuelBurnRateFunction
}

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity(velocity, acceleration, time) { 
  return velocity + (acceleration*time)
}

console.log(`Corrected New Velocity: ${acceleratedVelocity} km/h`);
console.log(`Corrected New Distance: ${distanceCovered} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






