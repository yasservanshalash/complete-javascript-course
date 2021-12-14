function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`
}

let syria = describeCountry("Syria", 17500000, "Damascus");
let lebanon = describeCountry("Lebanon", 4000000, "Beirut");
let finland = describeCountry("Finland", 6000000, "Helsinki");

console.log(syria);
console.log(lebanon);
console.log(finland);