let billValue = 275;
let tipPercentage = billValue >= 50 && billValue <= 300 ? 15 : 20;
let tipValue = billValue * (tipPercentage / 100); 
let total = billValue + tipValue;

console.log(`The bill was ${billValue} and tip was ${tipValue} and total was ${total}`);