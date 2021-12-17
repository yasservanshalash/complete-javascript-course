// function printForecast(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]}ºC in ${i} days...`);
//   }
// }

let forcast = "... ";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    forcast = forcast + `${arr[i]}ºC in ${i + 1} days...`;
  }
  return forcast;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
