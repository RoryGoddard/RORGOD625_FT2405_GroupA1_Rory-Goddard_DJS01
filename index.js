
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
const acceleratedVelocity = calculateNewVelocity(velocity, acceleration, time) //calculates new velocity based on acceleration

// Returns distance covered in kilometers
function calculateDistanceCovered(distance, velocity, time) {
  if (!distance) throw new Error("Distance object is required")
  if (!velocity) throw new Error("Velocity object is required")
  if (!time) throw new Error("Time object is required")
  
  let distanceConverted = 0

  if (!distance.measurement === "kilometers" || !distance.measurement === "meters") throw new Error("Please provide a distance object calculated in kilometers or meters")
  if (!velocity.measurement === "km/h") throw new Error("Please provide a velocity object calculated in kilometers per hour")
  
  if (distance.measurement === "meters") {
    distanceConverted = distance.value * 1000
  } else if (distance.measurement === "kilometers") {
    distanceConverted = distance.value
  }

  return distanceConverted + (velocity.value * convertTime(time, "hours"))
}

// Returns amount of remaining fuel
function calculateRemainingFuel(fuelBurnRate, time) { 
  if (!fuelBurnRate) throw new Error("fuelBurnRate object is required")
  if (!time) throw new Error("time object is required")
  if (!fuelBurnRate.measurement === "kg/s") throw new Error("Please provide a fuel burn rate in kg/s")
  
  return fuel.value - (fuelBurnRate.value * convertTime(time, "seconds"))
}

// Calculates velocity given the initial velocity, acceleration and time
function calculateNewVelocity(velocity, acceleration, time) {
  if (!velocity) throw new Error("Velocity object is required")
  if (!acceleration) throw new Error("Distance object is required")
  if (!time) throw new Error("Time object is required")
  
  if (!velocity.measurement === "km/h") throw new Error("Please provide a velocity object calculated in kilometers per hour")
  if (!acceleration.measurement === "m/s^2") throw new Error("Please provide an acceleration object calculated in meters per second squared")

  return (velocity.value + (acceleration.value * (convertTime(time, "seconds")) * 3.6))
}

// Converts time between seconds, minutes and hours, as needed
function convertTime(time, measurement) {
  if (!time) throw new Error("Time object is required")
  if (!measurement) throw new Error("Please input a unit of measurement to convert to")
  if (!measurement === "seconds" || !measurement === "minutes" || !measurement === "hours") throw new Error("The measurement must be a string in seconds, minutes, or hours")
  if (!time.measurement === "seconds" || !time.measurement === "minutes" || !time.measurement === "hours") throw new Error("The measurement must be a string reading 'seconds', 'minutes', or 'hours'")
  
  if (measurement === "seconds" && time.measurement === "hours") {
    return time.value * 3600
  } else if (measurement === "seconds" && time.measurement === "minutes") {
      return time.value * 60
  } else if (measurement === "minutes" && time.measurement === "seconds") {
      return time.value / 60
  } else if (measurement === "minutes" && time.measurement === "hours") {
      return time.value / 60
  } else if (measurement === "hours" && time.measurement === "minutes") {
      return time.value / 60
  } else if (measurement === "hours" && time.measurement === "seconds") {
      return time.value / 3600
  } else if (measurement === time.measurement) {
    return time.value
  } else throw new Error("Please provide a time object measured in seconds, minutes, or hours")
}

console.log(`Corrected New Velocity: ${acceleratedVelocity} km/h`);
console.log(`Corrected New Distance: ${distanceCovered} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






