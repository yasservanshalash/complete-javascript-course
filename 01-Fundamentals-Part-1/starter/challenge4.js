let billValue = 40;
let tipValue = billValue >= 50 && billValue <= 300 ? 15 : 20;
let total = billValue + (billValue * (tipValue / 100));

console.log(`The bill was ${billValue} and tip was ${tipValue} and total was ${total}`);