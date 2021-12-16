let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
    let tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
    let tipValue = bill * (tipPercentage / 100); 
    return tipValue;
    }

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log("bills", bills);
console.log("tips", tips);
console.log("totals", totals);

sum = 0;
function calcAverage(arr){
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    average = sum / arr.length;
    console.log("average", average);
    return average;
}