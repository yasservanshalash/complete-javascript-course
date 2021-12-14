function calcTip(bill) {
let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
let tipValue = bill * (tipPercentage / 100); 
return tipValue;
}

let bills = [125, 555, 44];
console.log("bills", bills);
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("tips", tips)
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("totlas", totals)
