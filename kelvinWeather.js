// Generates popup to get temperature from user
var kelvin = prompt('What is the Kelvin terperature today?');
// Converts Kelvin temperature to Celsius
var celsius = (kelvin - 273);
// Converts Celsius to fahrenheight
var fahrenheight = (celsius * (9/5) + 32);
// Outputs to console the result in fahrenheight
console.log(fahrenheight);
