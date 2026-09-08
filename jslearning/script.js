let celciusInput = document.querySelector(".celciusInput")
let fahrenheitInput = document.querySelector(".fahrenheitInput")
let totalSeconds = document.querySelector(".totalSecondsInput")

celciusInput.addEventListener("input" , () =>{

let celcius = parseFloat(celciusInput.value);
let celciusToFahrenheit = (fahrenheit = (celcius * 1.8) + 32);
console.log(`Celcius Value : ${celciusToFahrenheit}`);


})


fahrenheitInput.addEventListener("input", () => {

let fahrenheit = parseFloat(fahrenheitInput.value);
let fahrenheitToCelcius =(celcius = (fahrenheit - 32) / 1.8);
console.log(`fahrenheit Value : ${fahrenheitToCelcius}`);


})


totalSeconds.addEventListener("input" , () => {

let seconds = parseFloat(totalSeconds.value);

let secToMin = (Math.floor(seconds / 60));
let savedSec = seconds % 60 ;

console.log(`Sec to Min Value : ${secToMin}`);
console.log(`Save Sec Value : ${savedSec}`);


})

