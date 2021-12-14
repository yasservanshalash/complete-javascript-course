// Functions


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`
}

let syria = describeCountry("Syria", 17500000, "Damascus");
let lebanon = describeCountry("Lebanon", 4000000, "Beirut");
let finland = describeCountry("Finland", 6000000, "Helsinki");

console.log(syria);
console.log(lebanon);
console.log(finland);

// Function declarations vs expressions

worldPopulation = 7900000000;
function percentageOfWorld1(population) {
    return (population * 100)/7900000000;
}

console.log(`The population of China makes about ${percentageOfWorld1(1441000000)}% of the world's population`);
console.log(`The population of Syria makes about ${percentageOfWorld1(17500000)}% of the world's population`);
console.log(`The population of Finland makes about ${percentageOfWorld1(6000000)}% of the world's population`);

const percentageOfWorld2 = function(population){
    return (population * 100)/7900000000;
}

console.log(`The population of China makes about ${percentageOfWorld2(1441000000)}% of the world's population`);
console.log(`The population of Syria makes about ${percentageOfWorld2(17500000)}% of the world's population`);
console.log(`The population of Finland makes about ${percentageOfWorld2(6000000)}% of the world's population`);

